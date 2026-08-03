// `new Date('2024-06-12')` parses a bare ISO date as UTC and then formats it in
// the visitor's local zone, so the archive printed every date a day early for
// every US visitor. Building the date from its parts keeps both ends local, and
// keeps the server and the client on the same calendar day.

export function formatRecordDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);

  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
