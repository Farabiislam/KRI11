'use client';

import { useEffect, useState } from 'react';
import RevealAnimation from './reveal-animation';
import Link from 'next/link';

interface PlatformData {
  handle: string;
  rating?: number | string;
  solved?: number | string;
  stars?: string;
  rank?: string;
  loading: boolean;
  error: boolean;
}

const platforms = [
  {
    id: 'codeforces',
    name: 'Codeforces',
    handle: 'farabii099',
    shortCode: 'CF',
    gradient: 'from-blue-600 to-blue-400',
    color: 'text-blue-400',
    borderHover: 'hover:border-blue-500/50',
    profileUrl: 'https://codeforces.com/profile/farabii099',
    apiUrl: 'https://codeforces.com/api/user.info?handles=farabii099',
    badgeColors: {
      newbie: 'text-gray-400',
      pupil: 'text-green-400',
      specialist: 'text-cyan-400',
      expert: 'text-blue-400',
      'candidate master': 'text-purple-400',
      master: 'text-orange-400',
      'international master': 'text-orange-300',
      grandmaster: 'text-red-400',
      'international grandmaster': 'text-red-300',
      'legendary grandmaster': 'text-red-200',
    } as Record<string, string>,
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    handle: 'rashidulislam',
    shortCode: 'CC',
    gradient: 'from-[#67381B] to-[#a0522d]',
    color: 'text-[#a0522d]',
    borderHover: 'hover:border-[#a0522d]',
    profileUrl: 'https://www.codechef.com/users/rashidulislam',
    apiUrl: null, // CodeChef has no public API, we'll use static data
  },
  {
    id: 'leetcode',
    name: 'LeetCode',
    handle: 'khandokar_rashidul_islam1120',
    shortCode: 'LC',
    gradient: 'from-orange-500 to-yellow-400',
    color: 'text-orange-400',
    borderHover: 'hover:border-yellow-400/50',
    profileUrl: 'https://leetcode.com/u/khandokar_rashidul_islam1120/',
    apiUrl:
      'https://leetcode-stats-api.herokuapp.com/khandokar_rashidul_islam1120',
  },
];

function SkeletonCard() {
  return (
    <div className="p-6 rounded-lg border border-gray-700 text-center animate-pulse">
      <div className="w-12 h-12 bg-gray-700 rounded-lg mx-auto mb-4" />
      <div className="h-5 bg-gray-700 rounded w-32 mx-auto mb-2" />
      <div className="h-4 bg-gray-700 rounded w-24 mx-auto mb-3" />
      <div className="h-4 bg-gray-700 rounded w-40 mx-auto" />
    </div>
  );
}

export default function CompetitiveProgramming() {
  const [cfData, setCfData] = useState<PlatformData>({ handle: 'farabii099', loading: true, error: false });
  const [ccData, setCcData] = useState<PlatformData>({ handle: 'rashidulislam', loading: true, error: false });
  const [lcData, setLcData] = useState<PlatformData>({ handle: 'khandokar_rashidul_islam1120', loading: true, error: false });

  // Fetch Codeforces
  useEffect(() => {
    fetch('https://codeforces.com/api/user.info?handles=farabii099')
      .then(r => r.json())
      .then(data => {
        if (data.status === 'OK') {
          const user = data.result[0];
          setCfData({
            handle: user.handle,
            rating: user.rating ?? 'Unrated',
            rank: user.rank ?? 'newbie',
            solved: '—',
            loading: false,
            error: false,
          });
        } else {
          setCfData(prev => ({ ...prev, loading: false, error: true }));
        }
      })
      .catch(() => setCfData(prev => ({ ...prev, loading: false, error: true })));
  }, []);

  // CodeChef — no public API, use static known data
  useEffect(() => {
    setCcData({
      handle: 'rashidulislam',
      rating: '—',
      stars: '★',
      solved: '—',
      loading: false,
      error: false,
    });
  }, []);

  // Fetch LeetCode
  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/khandokar_rashidul_islam1120')
      .then(r => r.json())
      .then(data => {
        if (data.status !== 'error') {
          setLcData({
            handle: 'khandokar_rashidul_islam1120',
            solved: data.totalSolved ?? '—',
            rating: data.ranking ?? '—',
            loading: false,
            error: false,
          });
        } else {
          setLcData(prev => ({ ...prev, loading: false, error: true }));
        }
      })
      .catch(() => setLcData(prev => ({ ...prev, loading: false, error: true })));
  }, []);

  const cfPlatform = platforms[0];
  const rankColor =cfPlatform?.badgeColors?.[(cfData.rank ?? 'newbie').toLowerCase()] ?? 'text-gray-400';

  return (
    <RevealAnimation className="mx-4 relative" direction="up" delay={700}>
      <div className="py-20 relative max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Competitive Programming
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Active problem solver across major competitive programming
            platforms, sharpening algorithmic thinking and data structures
            skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Codeforces */}
          {cfData.loading ? (
            <SkeletonCard />
          ) : (
            <Link
              href="https://codeforces.com/profile/farabii099"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-lg border border-gray-700 text-center ${cfPlatform.borderHover} hover:bg-gray-800/40 transition-all duration-300 group block`}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${cfPlatform.gradient} rounded-lg flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}
              >
                CF
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Codeforces</h4>
              <p className={`text-sm font-semibold mb-3 ${cfPlatform.color}`}>
                @{cfData.handle}
              </p>
              {cfData.error ? (
                <p className="text-gray-500 text-sm">Could not load data</p>
              ) : (
                <div className="space-y-1">
                  <p className="text-gray-400 text-sm">
                    Rating:{' '}
                    <span className="text-white font-medium">
                      {cfData.rating}
                    </span>
                  </p>
                  <p className={`text-sm font-medium capitalize ${rankColor}`}>
                    {cfData.rank}
                  </p>
                </div>
              )}
            </Link>
          )}

          {/* CodeChef */}
          {ccData.loading ? (
            <SkeletonCard />
          ) : (
            <Link
              href="https://www.codechef.com/users/rashidulislam"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-lg border border-gray-700 text-center ${platforms[1].borderHover} hover:bg-gray-800/40 transition-all duration-300 group block`}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${platforms[1].gradient} rounded-lg flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}
              >
                CC
              </div>
              <h4 className="text-xl font-bold text-white mb-1">CodeChef</h4>
              <p className={`text-sm font-semibold mb-3 ${platforms[1].color}`}>
                @{ccData.handle}
              </p>
              <div className="space-y-1">
                <p className="text-gray-400 text-sm">
                  Visit profile to see latest rating & stars
                </p>
                <p className="text-[#a0522d] text-sm font-medium">
                  Click to view ↗
                </p>
              </div>
            </Link>
          )}

          {/* LeetCode */}
          {lcData.loading ? (
            <SkeletonCard />
          ) : (
            <Link
              href="https://leetcode.com/u/khandokar_rashidul_islam1120/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-lg border border-gray-700 text-center ${platforms[2].borderHover} hover:bg-gray-800/40 transition-all duration-300 group block`}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${platforms[2].gradient} rounded-lg flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}
              >
                LC
              </div>
              <h4 className="text-xl font-bold text-white mb-1">LeetCode</h4>
              <p className={`text-sm font-semibold mb-3 ${platforms[2].color}`}>
                @khandokar_rashidul_islam1120
              </p>
              {lcData.error ? (
                <p className="text-gray-500 text-sm">Could not load data</p>
              ) : (
                <div className="space-y-1">
                  <p className="text-gray-400 text-sm">
                    Solved:{' '}
                    <span className="text-white font-medium">
                      {lcData.solved}+
                    </span>{' '}
                    problems
                  </p>
                  <p className="text-gray-400 text-sm">
                    Global Rank:{' '}
                    <span className="text-white font-medium">
                      #{lcData.rating?.toLocaleString()}
                    </span>
                  </p>
                </div>
              )}
            </Link>
          )}
        </div>
      </div>
    </RevealAnimation>
  );
}