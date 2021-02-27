export interface IKnowledge {
  uid: string;
  title: string;
  link: string;
  contributorId: string;
  contributorName: string;
  timestamp: string;
  tags: string[];
  visitors: string[];
  fans: string[];
  collectors: string[];
}

export const instanceOfKnowledge = (arg: any): arg is IKnowledge =>
  "uid" in arg &&
  "title" in arg &&
  "link" in arg &&
  "contributorId" in arg &&
  "contributorName" in arg &&
  "timestamp" in arg &&
  "tags" in arg &&
  "visitors" in arg &&
  "fans" in arg &&
  "collectors" in arg;

export const defaultKnowledge: IKnowledge = {
  uid: "",
  title: "",
  link: "",
  contributorId: "",
  contributorName: "",
  timestamp: "",
  tags: [],
  visitors: [],
  fans: [],
  collectors: [],
};
