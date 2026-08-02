# Auth email templates

Branded HTML for every Supabase Auth email type. Supabase's dashboard editor
is the only way to apply these — there's no Management API token configured
in this project, so paste each file's contents manually:

**Dashboard → Authentication → Emails → (each template) → Source**, paste
the matching file below, then hit Save. Do this for all six.

| File | Dashboard template | Subject suggestion |
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

## Settings worth checking while you're in there

- **Authentication → Emails → SMTP**: already configured per your Hostinger
  setup earlier — these templates don't change that.
- **Authentication → Sign In / Providers → Email**: confirm "Confirm email"
  is enabled (required for the signup code step to matter) and note the
  configured OTP expiry — these templates say "expires shortly" rather than
  a specific number so they don't go stale if you change it.
