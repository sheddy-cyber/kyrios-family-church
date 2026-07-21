"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, Search, Download, Share2, ChevronDown } from "lucide-react";

const C = {
  crimson: "#8b1a1a",
  crimsonLight: "#e05555",
  ink: "#141210",
  inkSoft: "#433e38",
  inkMuted: "#7c756d",
  stone: "#c4beb5",
  border: "#e4ddd3",
  parchment: "#f0ebe3",
  canvas: "#f8f6f3",
  white: "#fff",
};

const allSermons = [
  {
    id: 1,
    title: "When God Sees You",
    series: "The God Who Sees",
    speaker: "Rev. Isaac Daniel",
    date: "March 9, 2025",
    duration: "48 min",
    scripture: "Genesis 16:13",
    bg: "#e8e4de",
  },
  {
    id: 2,
    title: "The Wilderness Season",
    series: "The God Who Sees",
    speaker: "Pastor Bisola Daniel",
    date: "March 2, 2025",
    duration: "42 min",
    scripture: "Exodus 3:1-5",
    bg: "#f0ebe3",
  },
  {
    id: 3,
    title: "Unshakeable",
    series: "Roots & Wings",
    speaker: "Rev. Isaac Daniel",
    date: "Feb 23, 2025",
    duration: "51 min",
    scripture: "Psalm 46:1-3",
    bg: "#e4ddd3",
  },
  {
    id: 4,
    title: "Called by Name",
    series: "Identity in Christ",
    speaker: "Rev. Isaac Daniel",
    date: "Feb 16, 2025",
    duration: "38 min",
    scripture: "Isaiah 43:1",
    bg: "#d8d1c7",
  },
  {
    id: 5,
    title: "The Power of One",
    series: "Roots & Wings",
    speaker: "Pastor Bisola Daniel",
    date: "Feb 9, 2025",
    duration: "44 min",
    scripture: "John 12:24",
    bg: "#ece6de",
  },
  {
    id: 6,
    title: "Positioned for Purpose",
    series: "Identity in Christ",
    speaker: "Rev. Isaac Daniel",
    date: "Feb 2, 2025",
    duration: "55 min",
    scripture: "Jeremiah 29:11",
    bg: "#e0dbd2",
  },
  {
    id: 7,
    title: "Living Waters",
    series: "The God Who Sees",
    speaker: "Rev. Isaac Daniel",
    date: "Jan 26, 2025",
    duration: "39 min",
    scripture: "John 4:14",
    bg: "#eae5de",
  },
  {
    id: 8,
    title: "The God of New Things",
    series: "New Year, New Season",
    speaker: "Rev. Isaac Daniel",
    date: "Jan 5, 2025",
    duration: "62 min",
    scripture: "Isaiah 43:19",
    bg: "#dcd6cc",
  },
];

const seriesList = [
  "All Series",
  "The God Who Sees",
  "Roots & Wings",
  "Identity in Christ",
  "New Year, New Season",
];
const speakerList = [
  "All Speakers",
  "Rev. Isaac Daniel",
  "Pastor Bisola Daniel",
  "Rev. Isaac Daniel",
];

export default function SermonsPageClient() {
  const [search, setSearch] = useState("");
  const [selSeries, setSelSeries] = useState("All Series");
  const [selSpeaker, setSelSpeaker] = useState("All Speakers");
  const [playing, setPlaying] = useState<number | null>(null);

  const filtered = allSermons.filter((s) => {
    const q = search.toLowerCase();
    return (
      (s.title.toLowerCase().includes(q) ||
        s.scripture.toLowerCase().includes(q)) &&
      (selSeries === "All Series" || s.series === selSeries) &&
      (selSpeaker === "All Speakers" || s.speaker === selSpeaker)
    );
  });

  return (
    <>
      {/* Hero */}
      <section
        className="section-pad"
        style={{ background: C.ink, position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.035,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            pointerEvents: "none",
            userSelect: "none" as const,
          }}
        >
          <span
            className="font-display font-bold"
            style={{
              fontSize: "clamp(80px, 16vw, 220px)",
              color: "#fff",
              paddingRight: "5%",
            }}
          >
            SERMONS
          </span>
        </div>
        <div className="site-container" style={{ position: "relative" }}>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.4em",
              textTransform: "uppercase" as const,
              color: C.crimsonLight,
              fontFamily: "var(--font-body)",
            }}
          >
            Audio &amp; Video
          </span>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(40px, 7vw, 80px)",
              fontWeight: 300,
              color: "#f8f6f3",
              margin: "14px 0 16px",
              lineHeight: 1.05,
            }}
          >
            Sermon Library
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 17px)",
              color: C.inkMuted,
              maxWidth: "480px",
              fontFamily: "var(--font-body)",
              lineHeight: 1.7,
            }}
          >
            Every message, every series — available to watch, listen, and
            download.
          </p>
        </div>
      </section>

      {/* Sticky search / filter bar */}
      <div
        className="sermons-filter-sticky"
        style={{
          background: C.white,
          borderBottom: `1px solid ${C.border}`,
          position: "sticky",
          top: "70px",
          zIndex: 30,
        }}
      >
        <div
          className="site-container"
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          <div className="sermons-filter-bar">
            <div
              className="sermons-search-box"
              style={{
                border: `1px solid ${C.border}`,
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Search size={14} style={{ color: C.stone, flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search sermons…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  fontSize: "13px",
                  border: "none",
                  outline: "none",
                  width: "100%",
                  background: "transparent",
                  fontFamily: "var(--font-body)",
                }}
              />
            </div>
            <div className="sermons-filter-controls">
              <div
                className="sermons-select"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  border: `1px solid ${C.border}`,
                  padding: "8px 12px",
                }}
              >
                <select
                  value={selSeries}
                  onChange={(e) => setSelSeries(e.target.value)}
                  style={{
                    fontSize: "13px",
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    color: C.inkSoft,
                    cursor: "pointer",
                    fontFamily: "var(--font-body)",
                    appearance: "none" as const,
                    paddingRight: "16px",
                  }}
                >
                  {seriesList.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown
                  size={12}
                  style={{
                    color: C.stone,
                    marginLeft: "-16px",
                    pointerEvents: "none" as const,
                  }}
                />
              </div>
              <div
                className="sermons-select"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  border: `1px solid ${C.border}`,
                  padding: "8px 12px",
                }}
              >
                <select
                  value={selSpeaker}
                  onChange={(e) => setSelSpeaker(e.target.value)}
                  style={{
                    fontSize: "13px",
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    color: C.inkSoft,
                    cursor: "pointer",
                    fontFamily: "var(--font-body)",
                    appearance: "none" as const,
                    paddingRight: "16px",
                  }}
                >
                  {speakerList.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown
                  size={12}
                  style={{
                    color: C.stone,
                    marginLeft: "-16px",
                    pointerEvents: "none" as const,
                  }}
                />
              </div>
              <span
                className="sermons-count"
                style={{
                  fontSize: "12px",
                  color: C.stone,
                  fontFamily: "var(--font-body)",
                }}
              >
                {filtered.length} messages
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mini player bar */}
      {playing !== null && (
        <div
          style={{
            background: C.parchment,
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          <div
            className="site-container"
            style={{
              paddingTop: "12px",
              paddingBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              flexWrap: "wrap" as const,
            }}
          >
            <div
              className="play-btn"
              style={{
                width: "36px",
                height: "36px",
                background: C.ink,
                flexShrink: 0,
              }}
            >
              <div style={{ display: "flex", gap: "3px" }}>
                <div
                  style={{ width: "3px", height: "14px", background: "#fff" }}
                />
                <div
                  style={{ width: "3px", height: "14px", background: "#fff" }}
                />
              </div>
            </div>
            <div style={{ flex: 1, minWidth: "120px" }}>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: C.ink,
                  fontFamily: "var(--font-body)",
                }}
              >
                {allSermons.find((s) => s.id === playing)?.title}
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: C.inkMuted,
                  fontFamily: "var(--font-body)",
                }}
              >
                {allSermons.find((s) => s.id === playing)?.speaker}
              </p>
            </div>
            <div
              style={{
                flex: 2,
                minWidth: "80px",
                height: "2px",
                background: C.border,
                position: "relative" as const,
              }}
            >
              <div
                style={{ width: "35%", height: "100%", background: C.crimson }}
              />
            </div>
            <span
              style={{
                fontSize: "12px",
                color: C.inkMuted,
                fontFamily: "monospace",
                flexShrink: 0,
              }}
            >
              {allSermons.find((s) => s.id === playing)?.duration}
            </span>
            <button
              onClick={() => setPlaying(null)}
              style={{
                fontSize: "11px",
                color: C.stone,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                fontFamily: "var(--font-body)",
                background: "none",
                border: "none",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Sermon list */}
      <section
        style={{
          background: C.white,
          paddingTop: "24px",
          paddingBottom: "48px",
        }}
      >
        <div className="site-container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "64px 0" }}>
              <p
                className="font-display"
                style={{ fontSize: "28px", color: C.stone }}
              >
                No sermons found
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelSeries("All Series");
                  setSelSpeaker("All Speakers");
                }}
                style={{
                  marginTop: "16px",
                  fontSize: "13px",
                  color: C.crimson,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  textDecoration: "underline",
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div style={{ borderTop: `1px solid ${C.border}` }}>
              {filtered.map((sermon) => (
                <div
                  key={sermon.id}
                  className="hover-bg-canvas"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 0",
                    borderBottom: `1px solid ${C.border}`,
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "52px",
                      background: sermon.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <button
                      onClick={() => setPlaying(sermon.id)}
                      className="play-btn"
                      style={{
                        width: "32px",
                        height: "32px",
                        background: playing === sermon.id ? C.ink : C.crimson,
                      }}
                    >
                      <Play
                        size={11}
                        fill="white"
                        color="white"
                        style={{ marginLeft: "2px" }}
                      />
                    </button>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase" as const,
                        color: C.crimson,
                        marginBottom: "3px",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {sermon.series}
                    </p>
                    <h3
                      className="font-display hover-color-crimson"
                      style={{
                        fontSize: "clamp(16px, 2.5vw, 20px)",
                        fontWeight: 500,
                        color: C.ink,
                        marginBottom: "2px",
                      }}
                    >
                      {sermon.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "12px",
                        color: C.inkMuted,
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {sermon.speaker} · {sermon.date}
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "4px", flexShrink: 0 }}>
                    <button
                      style={{
                        padding: "8px",
                        color: C.stone,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Download size={14} />
                    </button>
                    <button
                      style={{
                        padding: "8px",
                        color: C.stone,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Share2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Series browser */}
      <section className="section-pad" style={{ background: C.parchment }}>
        <div className="site-container">
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 300,
              color: C.ink,
              marginBottom: "24px",
            }}
          >
            Browse By Series
          </h2>
          <div className="about-mission">
            {[
              { title: "The God Who Sees", count: 3, bg: "#e8e4de" },
              { title: "Roots & Wings", count: 2, bg: "#e4ddd3" },
              { title: "Identity in Christ", count: 2, bg: "#dcd6cc" },
            ].map((s) => (
              <button
                key={s.title}
                className="hover-lift"
                onClick={() => setSelSeries(s.title)}
                style={{
                  background: s.bg,
                  padding: "clamp(24px, 4vw, 36px)",
                  textAlign: "left" as const,
                  border: "none",
                  cursor: "pointer",
                  display: "block",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                    color: C.inkMuted,
                    marginBottom: "6px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {s.count} messages
                </p>
                <h3
                  className="font-display"
                  style={{ fontSize: "clamp(18px, 3vw, 24px)", color: C.ink }}
                >
                  {s.title}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
