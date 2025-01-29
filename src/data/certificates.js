import { getList } from "../utils/imagekit";

const getCertificate = async (path) => {
  const fullpath = `ferys2195/certificates/${path}`;
  return await getList(fullpath);
};

const fetchCertificates = async () => {
  const certificateData = [
    {
      title: "React Developer",
      datalist: await getCertificate("React-Developer"),
    },
    {
      title: "Front End Web",
      datalist: await getCertificate("Front-End-Web"),
    },
    {
      title: "Data Science & Machine Learning",
      datalist: await getCertificate("Data-Science"),
    },
    {
      title: "Android",
      datalist: await getCertificate("Android"),
    },
    {
      title: "Others",
      datalist: await getCertificate("Others"),
    },
  ];
  return certificateData;
};

export { fetchCertificates };
