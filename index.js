/**
 * @akashkore5/pdf-metadata-stripper
 * Client-side sanitization helpers for PDF document info & XMP streams.
 * Powered by https://www.editpdfkit.com/tools/remove-metadata
 */

/**
 * Standard PDF metadata keys to scrub
 */
const METADATA_KEYS_TO_SCRUB = [
  'Title',
  'Author',
  'Subject',
  'Keywords',
  'Creator',
  'Producer',
  'CreationDate',
  'ModDate',
  'Trapped'
];

/**
 * Sanitizes PDF metadata properties dictionary in memory
 * @param {Object} docInfo - Document info dictionary or wrapper
 * @returns {Object} Cleaned metadata map
 */
function sanitizeDocInfo(docInfo = {}) {
  const sanitized = { ...docInfo };
  for (const key of METADATA_KEYS_TO_SCRUB) {
    if (key in sanitized) {
      delete sanitized[key];
    }
  }
  return sanitized;
}

module.exports = {
  METADATA_KEYS_TO_SCRUB,
  sanitizeDocInfo
};
