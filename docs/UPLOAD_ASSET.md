# Upload Asset Feature

This feature allows users to upload files to AWS S3 through a web interface.

## Overview

The Upload Asset page provides a simple form interface for uploading files to AWS S3 storage.

## Features

- File name input field
- File upload selector (supports any file type)
- Form validation for required fields
- Real-time error feedback
- Loading state during upload
- Success message with uploaded file URL
- Copy-to-clipboard functionality for the URL
- Responsive design with dark mode support

## Usage

1. Navigate to `/upload-asset` in the application
2. Enter a file name in the "File Name" field
3. Select a file using the file picker
4. Click "Upload to S3"
5. Upon success, the file URL will be displayed with a copy button

## API Endpoint

**POST** `/api/upload`

### Request Body (multipart/form-data)
- `file`: The file to upload
- `fileName`: Custom file name for the upload

### Response
```json
{
  "success": true,
  "url": "https://bucket-name.s3.region.amazonaws.com/uploads/timestamp-filename",
  "message": "File uploaded successfully"
}
```

## Configuration

Set the following environment variables in `.env.local`:

```env
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_S3_BUCKET_NAME=your_bucket_name
```

## Security

- AWS credentials are validated before use
- Empty credentials will cause the API to fail with a clear error message
- File uploads are processed server-side to ensure security
- No sensitive information is exposed in error messages

## Technical Implementation

- **Frontend**: React component with TypeScript
- **API**: Next.js API Route (Server-side)
- **HTTP Client**: Axios for API requests
- **AWS SDK**: @aws-sdk/client-s3
- **Styling**: Tailwind CSS with dark mode support

## File Structure

```
app/
├── upload-asset/
│   └── page.tsx         # Upload form component
└── api/
    └── upload/
        └── route.ts     # S3 upload handler
```
