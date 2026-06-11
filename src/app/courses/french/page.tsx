"use client";

import { CourseLanding } from "@/components/courses/CourseLanding";
import { FRENCH } from "@/lib/courseData";

export default function FrenchPage() {
  return <CourseLanding data={FRENCH} />;
}
