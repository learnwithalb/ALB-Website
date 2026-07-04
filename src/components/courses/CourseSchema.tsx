import { JsonLd } from "@/components/seo/JsonLd";
import { courseSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { CourseFaq } from "@/lib/courseData";

/** Emits Course + BreadcrumbList + FAQPage JSON-LD for a course landing page. */
export function CourseSchema({
  name,
  description,
  path,
  about,
  faqs,
}: {
  name: string;
  description: string;
  path: string;
  about?: string;
  faqs?: CourseFaq[];
}) {
  return (
    <JsonLd
      data={[
        courseSchema({ name, description, path, about }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Courses", path: "/courses" },
          { name, path },
        ]),
        ...(faqs && faqs.length ? [faqSchema(faqs)] : []),
      ]}
    />
  );
}
