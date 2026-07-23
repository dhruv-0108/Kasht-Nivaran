import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Compass } from 'lucide-react';
import type { Translations } from '../types';

interface DirectionsProps {
  t: Translations;
}

export const Directions: React.FC<DirectionsProps> = ({ t }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(t.directionsAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=Kastanivaran+Hanumanji+Mandir,+Gola,+Gujarat+394540`;
  const embedUrl = `https://maps.google.com/maps?q=Kastanivaran%20Hanumanji%20Mandir,%20Gola-Takarma%20Rd,%20Gola,%20Gujarat%20394540&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section style={{
      width: '100%',
      maxWidth: '850px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '28px',
      padding: '8px 0',
    }}>
      {/* Title */}
      <div style={{ textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "var(--font-serif, 'Cormorant Garamond', Georgia, serif)",
          fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
          fontWeight: 700,
          letterSpacing: '0.08em',
          color: 'var(--drapery)',
        }}>
          {t.directionsHeading}
        </h2>
        <div style={{
          width: '60px',
          height: '2.5px',
          backgroundColor: 'var(--sindoor)',
          margin: '10px auto 0',
        }} />
      </div>

      {/* Main card panel with temple-frame style */}
      <div className="temple-frame" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        alignItems: 'stretch',
        overflow: 'hidden',
      }}>
        {/* Left Side: Info and Actions */}
        <div style={{
          padding: 'clamp(20px, 4vw, 32px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '24px',
        }}>
          {/* Address Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <MapPin size={20} color="var(--sindoor)" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div>
                <p style={{
                  fontWeight: 600,
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  color: 'var(--drapery)',
                }}>
                  {t.directionsAddress}
                </p>
                <span className="caption" style={{
                  fontSize: '0.7rem',
                  color: 'var(--stone-lt)',
                  marginTop: '4px',
                  display: 'inline-block',
                }}>
                  {t.directionsPlusCode}
                </span>
              </div>
            </div>
          </div>

          {/* Travel Info */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            borderTop: '1px solid rgba(212, 149, 10, 0.15)',
            paddingTop: '16px',
          }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <Navigation size={16} color="var(--marigold)" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--stone)' }}>{t.byRoadTitle}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--stone-lt)', marginTop: '2px' }}>{t.byRoadDesc}</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <Compass size={16} color="var(--marigold)" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--stone)' }}>{t.nearbyTitle}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--stone-lt)', marginTop: '2px' }}>{t.nearbyDesc}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginTop: 'auto',
          }}>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn-primary"
              style={{
                flex: '1 1 180px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 20px',
                backgroundColor: 'var(--sindoor)',
                color: '#fff',
                fontSize: '0.85rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'background-color 0.2s ease, transform 0.1s ease',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              <Navigation size={14} />
              {t.getDirectionsBtn}
            </a>

            <button
              onClick={copyToClipboard}
              className="action-btn-secondary"
              style={{
                flex: '1 1 140px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 20px',
                backgroundColor: 'transparent',
                border: '1.5px solid var(--stone)',
                color: 'var(--stone)',
                fontSize: '0.85rem',
                fontWeight: 700,
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
            >
              {copied ? <Check size={14} color="green" /> : <Copy size={14} />}
              {copied ? t.addressCopied : t.copyAddressBtn}
            </button>
          </div>
        </div>

        {/* Right Side: Map Embed */}
        <div style={{
          minHeight: '280px',
          position: 'relative',
          borderLeft: '1px solid rgba(212, 149, 10, 0.15)',
        }}>
          <iframe
            title="Temple Location Map"
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '280px', display: 'block' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <style>{`
        .action-btn-primary:hover {
          background-color: #a34211 !important;
          transform: translateY(-1px);
        }
        .action-btn-primary:active {
          transform: translateY(0);
        }
        .action-btn-secondary:hover {
          background-color: rgba(74, 63, 51, 0.05) !important;
          border-color: var(--sindoor) !important;
          color: var(--sindoor) !important;
        }
      `}</style>
    </section>
  );
};

export default Directions;
