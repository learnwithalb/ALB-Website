"use client";

import { CourseLanding } from "@/components/courses/CourseLanding";
import { GERMAN } from "@/lib/courseData";

export default function GermanPage() {
  return <CourseLanding data={GERMAN} />;
}
