// Centralised MUI icon map for the ALB website.
// Pages import from here instead of using emoji strings.

import React from "react";
import Image from "next/image";
import PublicIcon from "@mui/icons-material/Public";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import ArticleIcon from "@mui/icons-material/Article";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BusinessIcon from "@mui/icons-material/Business";
import FlightIcon from "@mui/icons-material/Flight";
import HandshakeIcon from "@mui/icons-material/Handshake";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ForumIcon from "@mui/icons-material/Forum";
import EditNoteIcon from "@mui/icons-material/EditNote";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import MicIcon from "@mui/icons-material/Mic";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import EmailIcon from "@mui/icons-material/Email";
import FactoryIcon from "@mui/icons-material/Factory";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ScienceIcon from "@mui/icons-material/Science";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import TvIcon from "@mui/icons-material/Tv";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import ComputerIcon from "@mui/icons-material/Computer";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MovieIcon from "@mui/icons-material/Movie";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WavesIcon from "@mui/icons-material/Waves";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import TranslateIcon from "@mui/icons-material/Translate";
import DescriptionIcon from "@mui/icons-material/Description";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BarChartIcon from "@mui/icons-material/BarChart";
import LanguageIcon from "@mui/icons-material/Language";
import MapIcon from "@mui/icons-material/Map";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import StarsIcon from "@mui/icons-material/Stars";
import PeopleIcon from "@mui/icons-material/People";
import GradeIcon from "@mui/icons-material/Grade";

// Re-export individual icons for direct import convenience
export {
  PublicIcon, RocketLaunchIcon, TrackChangesIcon, ChildCareIcon, StarIcon,
  SchoolIcon, PsychologyIcon, SportsEsportsIcon, FamilyRestroomIcon,
  RecordVoiceOverIcon, ArticleIcon, AccountBalanceIcon, BusinessIcon,
  FlightIcon, HandshakeIcon, MenuBookIcon, ForumIcon, EditNoteIcon,
  LocalCafeIcon, MicIcon, ChildFriendlyIcon, EmailIcon, FactoryIcon,
  LocalHospitalIcon, ScienceIcon, WorkIcon, EmojiEventsIcon, TheaterComedyIcon,
  BeachAccessIcon, TvIcon, CurrencyYenIcon, ComputerIcon, LocalFloristIcon,
  MusicNoteIcon, MovieIcon, PhoneAndroidIcon, WavesIcon, RamenDiningIcon,
  TranslateIcon, DescriptionIcon, AutoAwesomeIcon, AllInclusiveIcon,
  TrendingUpIcon, BarChartIcon, LanguageIcon, MapIcon, VolunteerActivismIcon,
  StarsIcon, PeopleIcon, GradeIcon,
};

export const iconMap: Record<string, React.ComponentType<{ style?: React.CSSProperties; className?: string }>> = {
  globe: PublicIcon,
  language: LanguageIcon,
  rocket: RocketLaunchIcon,
  target: TrackChangesIcon,
  baby: ChildCareIcon,
  star: StarIcon,
  stars: StarsIcon,
  school: SchoolIcon,
  brain: PsychologyIcon,
  gaming: SportsEsportsIcon,
  family: FamilyRestroomIcon,
  teacher: RecordVoiceOverIcon,
  article: ArticleIcon,
  institution: AccountBalanceIcon,
  business: BusinessIcon,
  flight: FlightIcon,
  handshake: HandshakeIcon,
  book: MenuBookIcon,
  chat: ForumIcon,
  edit: EditNoteIcon,
  cafe: LocalCafeIcon,
  mic: MicIcon,
  child: ChildFriendlyIcon,
  email: EmailIcon,
  factory: FactoryIcon,
  hospital: LocalHospitalIcon,
  science: ScienceIcon,
  work: WorkIcon,
  trophy: EmojiEventsIcon,
  theater: TheaterComedyIcon,
  beach: BeachAccessIcon,
  tv: TvIcon,
  yen: CurrencyYenIcon,
  computer: ComputerIcon,
  flower: LocalFloristIcon,
  music: MusicNoteIcon,
  movie: MovieIcon,
  phone: PhoneAndroidIcon,
  waves: WavesIcon,
  ramen: RamenDiningIcon,
  translate: TranslateIcon,
  description: DescriptionIcon,
  sparkle: AutoAwesomeIcon,
  infinite: AllInclusiveIcon,
  trending: TrendingUpIcon,
  chart: BarChartIcon,
  map: MapIcon,
  heart: VolunteerActivismIcon,
  people: PeopleIcon,
  grade: GradeIcon,
};

/** Render any icon by string key. Falls back to a Language icon. */
export function MuiIcon({
  name,
  size = 24,
  className,
  style,
}: {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const Comp = iconMap[name] ?? LanguageIcon;
  return <Comp style={{ fontSize: size, ...style }} className={className} />;
}

/* ─── Flag images (served from /public/flags) ─── */
export const flagSrc: Record<string, string> = {
  FR: "/flags/fr.png",
  DE: "/flags/de.png",
  ES: "/flags/es.png",
  JP: "/flags/jp.png",
  KR: "/flags/kr.png",
  EN: "/flags/uk-wave.png",
  GB: "/flags/uk-wave.png",
};

/** Codes whose asset is a transparent waving-flag icon — rendered uncropped, not in a rounded frame. */
const ICON_FLAGS = new Set(["EN", "GB"]);

/** Small rounded flag image. Returns null if no flag exists for the code. */
export function Flag({
  code,
  size = 24,
  className = "",
  rounded = "rounded-md",
}: {
  code: string;
  size?: number;
  className?: string;
  rounded?: string;
}) {
  const upper = code.toUpperCase();
  const src = flagSrc[upper];
  if (!src) return null;
  const isIcon = ICON_FLAGS.has(upper);
  return (
    <span
      className={`relative inline-block flex-shrink-0 ${isIcon ? "" : `overflow-hidden ${rounded}`} ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={`${code} flag`}
        fill
        sizes={`${size}px`}
        className={isIcon ? "object-contain" : "object-cover"}
      />
    </span>
  );
}

/** Styled country flag badge — uses the real flag image, falls back to a coloured code chip. */
export function CountryBadge({
  code,
  color,
  size = "md",
}: {
  code: string;
  color?: string;
  size?: "sm" | "md" | "lg";
}) {
  const pxMap = { sm: 32, md: 56, lg: 80 };
  const fontMap = { sm: "0.6rem", md: "0.75rem", lg: "1rem" };
  const dim = pxMap[size];
  const upper = code.toUpperCase();
  const src = flagSrc[upper];

  // Transparent waving-flag icon (UK): render uncropped, no circular frame.
  if (src && ICON_FLAGS.has(upper)) {
    return (
      <span className="relative inline-block flex-shrink-0" style={{ width: dim, height: dim }}>
        <Image src={src} alt={`${code} flag`} fill sizes={`${dim}px`} className="object-contain" />
      </span>
    );
  }

  if (src) {
    return (
      <span
        className="relative inline-block rounded-full overflow-hidden flex-shrink-0"
        style={{
          width: dim,
          height: dim,
          boxShadow: `0 4px 14px ${color ? `${color}33` : "rgba(16,23,51,0.12)"}, inset 0 0 0 1px rgba(16,23,51,0.08)`,
        }}
      >
        <Image src={src} alt={`${code} flag`} fill sizes={`${dim}px`} className="object-cover" />
      </span>
    );
  }

  // Fallback: coloured code chip (regions without a flag asset)
  const bg = color ? `${color}18` : "rgba(59,91,219,0.10)";
  const border = color ? `1px solid ${color}44` : "1px solid rgba(59,91,219,0.22)";
  return (
    <div
      style={{
        width: dim,
        height: dim,
        borderRadius: "50%",
        background: bg,
        border,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: fontMap[size], fontWeight: 900, color: color ?? "#3b5bdb", letterSpacing: "0.05em" }}>
        {code}
      </span>
    </div>
  );
}
