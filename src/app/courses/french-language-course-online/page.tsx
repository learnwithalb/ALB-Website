"use client";

import { CourseLanding } from "@/components/courses/CourseLanding";
import { FrenchFluencyClinic } from "@/components/courses/FrenchFluencyClinic";
import { FRENCH } from "@/lib/courseData";

export default function FrenchPage() {
  return <CourseLanding data={FRENCH} beforeJourney={<FrenchFluencyClinic />} />;
}
