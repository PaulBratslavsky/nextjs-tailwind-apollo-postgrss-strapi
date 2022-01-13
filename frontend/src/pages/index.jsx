import React from "react";
import { gql } from "@apollo/client";
import client from "../apollo";
import FeaturedProjects from "components/FeaturedProjects/featuredProjects";
import RecentPosts from "components/RecentPosts/recentPosts";
import HeroSection from "components/HeroSection/heroSection";
import Page from "components/Page/page";

export default function HomePage() { //{ projects, heroSection }
  return (
    <Page>
      {/* <HeroSection description={heroSection.description} /> */}
      {/* <FeaturedProjects projects={projects} /> */}
      {/* <RecentPosts /> */}
    </Page>
  );
}

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//       query Prjects {
//         projects {
//           id
//           name
//           description
//           likesCount
//           published_at

//           developer {
//             id
//             firstName
//             lastName
//             avatarImage {
//               url
//             }
//           }

//           featuredImage {
//             formats
//           }
//         }

//         heroSection {
//           description
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       projects: data.projects.slice(0, 4),
//       heroSection: data.heroSection || "",
//     },
//   };
// }
