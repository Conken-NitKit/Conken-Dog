export interface IKnowledge {
  title: string;
  link: string;
  contributorName: string;
  timestamp: string;
  tags: string[];
  visitors: string[];
  fans: string[];
  collectors: string[];
}

export const instanceOfKnowledge = (arg: any): arg is IKnowledge =>
  "title" in arg &&
  "link" in arg &&
  "contributorName" in arg &&
  "timestamp" in arg &&
  "tags" in arg &&
  "visitors" in arg &&
  "fans" in arg &&
  "collectors" in arg;

export const defaultKnowledge: IKnowledge = {
  title: "",
  link: "",
  contributorName: "",
  timestamp: "",
  tags: [],
  visitors: [],
  fans: [],
  collectors: [],
};
