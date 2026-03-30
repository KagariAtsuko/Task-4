# Task 4 - Static QR Check-In

This project shows 9 online events.

- Click `Check In` on any event card.
- A modal opens with your static QR image file: `Qr code.png`.
- Scanning that QR sends users to your Google Form link.

## Files used

- `index.html`
- `style.css`
- `script.js`
- `Qr code.png`

## Run

```powershell
python -m http.server 5500
```

Open:

```text
http://localhost:5500
```

If QR image does not appear, ensure filename is exactly:

```text
Qr code.png
```
