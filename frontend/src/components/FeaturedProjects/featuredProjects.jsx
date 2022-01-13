import Link from "next/link";
import { format } from "date-fns";
import Container from "block/Container/container";

export default function FeaturedProjects({ projects }) {
  console.log(projects, "from featured projects");
  return (
    <Container>
      <div className="relative p-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Check out some of these more recent projects submitted by our
              community.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={project.featuredImage.formats.large.url}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      {/* TODO: FIX TO LINK TO PROJECTS BY THIS DEVELOPER */}
                      <a href="#" className="hover:underline">
                        {`${project.developer.firstName}'s Projects`}
                      </a>
                    </p>
                    <p className="text-xl font-semibold text-gray-900">
                      {project.name}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      {/* TODO: ADD LINK TO DEVELOPERS PAGE */}
                      <a href="#">
                        <span className="sr-only">
                          {`${project.developer.firstName} ${project.developer.lastName}`}
                        </span>
                        {project.developer.avatarImage !== null && (
                          <img
                            className="h-10 w-10 rounded-full"
                            src={project.developer.avatarImage.url}
                            alt=""
                          />
                        )}
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {/* TODO: ADD LINK TO DEVELOPERS PAGE */}
                        <a href="#" className="hover:underline">
                          {`${project.developer.firstName} ${project.developer.lastName}`}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={project.published_at}>
                          {format(new Date(project.published_at), "PPP")}
                        </time>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Link href={`/projects/${project.id}`}>
                        <a className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Veiw Project
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
