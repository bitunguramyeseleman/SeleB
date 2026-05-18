// Public URL to the resume PDF stored in Supabase Storage (public bucket: "resumes").
// Generated and uploaded by the `upload-sample-resume` edge function.
export const RESUME_URL =
  'https://piphtchzshkykelzdzfs.databasepad.com/storage/v1/object/public/resumes/BITUNGURAMYE_Seleman_Resume.pdf';

export const RESUME_FILENAME = 'BITUNGURAMYE_Seleman_Resume.pdf';

/**
 * Trigger a real browser download of the resume PDF.
 * Falls back to opening in a new tab if the fetch+blob path fails (e.g. CORS issue).
 */
export async function downloadResume(): Promise<void> {
  try {
    const res = await fetch(RESUME_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = RESUME_FILENAME;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  } catch {
    // Fallback: open in new tab so the user can save manually
    window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
  }
}
