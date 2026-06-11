"use client";

import { CourseLanding } from "@/components/courses/CourseLanding";
import { KOREAN } from "@/lib/courseData";

export default function KoreanPage() {
  return <CourseLanding data={KOREAN} />;
}
