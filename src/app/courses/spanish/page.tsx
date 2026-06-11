"use client";

import { CourseLanding } from "@/components/courses/CourseLanding";
import { SPANISH } from "@/lib/courseData";

export default function SpanishPage() {
  return <CourseLanding data={SPANISH} />;
}
