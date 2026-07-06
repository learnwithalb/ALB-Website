"use client";

import { CourseLanding } from "@/components/courses/CourseLanding";
import { ENGLISH } from "@/lib/courseData";

export default function IeltsPage() {
  return <CourseLanding data={ENGLISH} singleDownload />;
}
