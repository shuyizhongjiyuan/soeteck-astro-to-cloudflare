export const NEWS_RELEASES_HERO = {
  title: 'News Releases',
  description: 'Official Soeteck announcements, product updates, event news, and company milestones for partners, customers, and media.',
  panelLabel: 'Official updates',
  panelItems: ['Product announcements', 'Events & exhibitions', 'Company milestones'],
};

export const NEWSROOM_TOPICS = ['Product Updates', 'Events', 'Company News', 'Partnerships'];

export const NEWSROOM_FACTS = [
  'Data center power and cooling solutions',
  'Global project support',
  'OEM/ODM capability',
  'Multi-language business support',
];

export function formatDisplayDate(value: string | null): string {
  if (!value) {
    return '';
  }

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(value));
}

export function formatDateParts(value: string | null): { month: string; day: string; year: string } {
  if (!value) {
    return { month: '', day: '', year: '' };
  }

  const date = new Date(value);

  return {
    month: new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date),
    day: new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(date),
    year: new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(date),
  };
}
