# Auth email templates

Branded HTML for every Supabase Auth email type. These are live on the
project already — pushed via the Management API
(`PATCH /v1/projects/{ref}/config/auth`) using a personal access token, one
field pair (`mailer_templates_*_content` + `mailer_subjects_*`) per
template. These files are the source of truth going forward; edit here and
re-push rather than editing in the dashboard, so the repo doesn't drift from
what's actually live.

If you ever need to redo this by hand instead: **Dashboard → Authentication
→ Emails → (each template) → Source**, paste the matching file, then Save.

| File | Dashboard template | Subject |
|---|---|---|
| `confirm-signup.html` | Confirm signup | `Your AI Microtools confirmation code` |
| `reset-password.html` | Reset Password | `Your AI Microtools password reset code` |
| `reauthentication.html` | Reauthentication | `Your AI Microtools verification code` |
| `magic-link.html` | Magic Link | `Log in to AI Microtools` |
| `invite-user.html` | Invite user | `You've been invited to AI Microtools` |
| `change-email-address.html` | Change Email Address | `Confirm your new AI Microtools email` |

## Why only three are code-based

`confirm-signup`, `reset-password`, and `reauthentication` show a 6-digit
`{{ .Token }}` and deliberately drop the `{{ .ConfirmationURL }}` button —
the app's signup and forgot-password forms now have a matching "enter your
code" step (`SignupForm.tsx`, `ForgotPasswordForm.tsx`) that calls
`supabase.auth.verifyOtp(...)`. Reauthentication has no link variant in
Supabase regardless.

`magic-link`, `invite-user`, and `change-email-address` stay link-based
since the app has no UI to consume a code for those flows — showing a code
with nowhere to type it would just confuse recipients.

## Confirmed live project settings (checked via the Management API)

- `mailer_autoconfirm: false` — signup requires confirmation, so the OTP
  step in `SignupForm.tsx` is actually load-bearing, not decorative.
- `mailer_otp_length: 6`, `mailer_otp_exp: 3600` — 6-digit codes, 1 hour
  expiry. Templates say "expires shortly" rather than a number so they
  don't go stale if this changes.
- `security_captcha_enabled: true` (`turnstile`) — every email-sending call
  (`signUp`, `resend`, `resetPasswordForEmail`) needs a fresh Turnstile
  token, which is why the code-entry steps re-render `<TurnstileWidget>`
  before their "Resend code" button.
