"use client";

import { CourseLanding } from "@/components/courses/CourseLanding";
import { JAPANESE } from "@/lib/courseData";

export default function JapanesePage() {
  return <CourseLanding data={JAPANESE} />;
}
