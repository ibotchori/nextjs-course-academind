// our-domain.com/news/something-important

import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId; // <-- get value from URL

  // send a request to the backed API to fetch the news item with newsId

  return <h1>The Detail Page</h1>;
};

export default DetailPage;
