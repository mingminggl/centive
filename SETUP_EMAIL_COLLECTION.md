# Email Collection Setup Guide

This guide shows you how to set up free email collection for your Centive landing page using Google Sheets.

## Option 1: Google Sheets (Recommended - Free)

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet called "Centive Waitlist"
3. Add these column headers in row 1:
   - Column A: `timestamp`
   - Column B: `email`
   - Column C: `source`

### Step 2: Create Google Apps Script
1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code and paste this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const timestamp = e.parameter.timestamp || new Date().toISOString();
    const email = e.parameter.email;
    const source = e.parameter.source || 'unknown';
    
    sheet.appendRow([timestamp, email, source]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (disk icon)
4. Click **Deploy** → **New deployment**
5. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
6. Configure:
   - **Description**: "Centive Email Collection"
   - **Execute as**: Me
   - **Who has access**: Anyone
7. Click **Deploy**
8. Copy the **Web app URL** (it looks like: `https://script.google.com/macros/s/...`)

### Step 3: Update Your Code
1. Open `src/components/Hero.jsx`
2. Replace `'YOUR_GOOGLE_SCRIPT_URL'` with your Web app URL
3. Open `src/components/Join.jsx`
4. Replace `'YOUR_GOOGLE_SCRIPT_URL'` with the same Web app URL

### Step 4: Deploy
```bash
npm run deploy
```

---

## Option 2: Alternative Services

### Formspree (Free tier: 50 submissions/month)
1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Use the form endpoint in your code
4. Replace the fetch URL with your Formspree endpoint

### Basin (Free tier: 100 submissions/month)
1. Sign up at [Basin.com](https://usebasin.com)
2. Create a new form
3. Use the form endpoint in your code

### EmailOctopus (Email marketing - Free tier: 2,500 subscribers)
1. Sign up at [EmailOctopus.com](https://emailoctopus.com)
2. Create a list
3. Use their API to add subscribers

---

## Testing

After setup, test the forms:
1. Run `npm run dev`
2. Submit an email in both the Hero section and Join section
3. Check your Google Sheet - you should see new rows with:
   - Timestamp
   - Email address
   - Source (hero or join)

---

## Exporting Data

To export your collected emails:
1. Open your Google Sheet
2. File → Download → CSV
3. Use the CSV file with your email marketing tool

---

## Security Note

The current setup is public (anyone can submit). For production, consider:
- Adding rate limiting
- Adding reCAPTCHA
- Email validation on the backend
- Using a proper email marketing service (Mailchimp, ConvertKit, etc.)
