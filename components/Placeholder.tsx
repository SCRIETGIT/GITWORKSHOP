import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import NavigationButtons from "@/components/Navigation/NavigationButtons";

export default function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <WorkshopLayout>
      <div className="space-y-8">
        <div>
          <h1>{title}</h1>
          <p className="text-projector-lg text-gh-text-secondary mt-4">
            {description}
          </p>
        </div>

        <div className="card bg-gh-accent-yellow bg-opacity-10 border-gh-accent-yellow">
          <h2 className="text-gh-accent-yellow mb-4">🚧 Content Coming Soon</h2>
          <p className="text-projector-sm">
            This section content is currently being developed. Please check back soon or use the navigation
            to explore other sections of the workshop.
          </p>
        </div>

        <NavigationButtons />
      </div>
    </WorkshopLayout>
  );
}
