# Email Setup Instructions

## Current Issue
Email sending fails due to Gmail security settings.

## Solutions (Try in order):

### Option 1: Enable Less Secure Apps (Temporary)
1. Go to: https://myaccount.google.com/lesssecureapps
2. Turn ON "Allow less secure apps"
3. Restart your backend server

### Option 2: Use App Password (Recommended)
1. Go to: https://myaccount.google.com/apppasswords
2. Generate new app password for "Mail"
3. Replace EMAIL_PASS in .env with the 16-character password

### Option 3: Enable 2-Step Verification
1. Go to: https://myaccount.google.com/security
2. Enable 2-Step Verification
3. Then generate App Password (Option 2)

### Option 4: Alternative Email Service
If Gmail doesn't work, use a different email service:

```env
EMAIL_USER=your_email@outlook.com
EMAIL_PASS=your_password
```

## Test Email Configuration
After making changes:
1. Restart backend: `npm start`
2. Check console for "Email server is ready to send messages"
3. If you see errors, the email config needs fixing

## Current Status
- ✅ Backend server working
- ⚠️ Email configuration needs Gmail security settings
- ✅ All other features working