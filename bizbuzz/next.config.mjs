/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // v3 collapses the per-year routes into one page with a year switcher, so
    // every old URL keeps working and lands on the season it used to serve.
    const years = (prefix, list) =>
      list.map((y) => ({ source: `${prefix}-${y}`, destination: `${prefix}#${y}`, permanent: true }));

    return [
      ...years("/camps", ["2024", "2025", "2026", "2027"]),
      ...years("/fish-tank", ["2024", "2025", "2026"]),
      { source: "/sessions", destination: "/office-hours", permanent: true },
      { source: "/years", destination: "/seasons", permanent: true },
      { source: "/years/:year", destination: "/seasons", permanent: true },
    ];
  },
};

export default nextConfig;
