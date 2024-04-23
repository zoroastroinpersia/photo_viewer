import TopicJSON from "../api/TopicJSON";

class Topic {

  private id: string;
  private title: string;
  private description: string;

  // declare constructor
  constructor(topicJSON: TopicJSON) {
    this.id = topicJSON.id;
    this.title = topicJSON.title;
    this.description = topicJSON.description;
  }

  // declare getters and setters

  public getId():string {
    return this.id
  }

  public setId(id: string) {
    this.id = id;
  }

  public getTitle():string {
    return this.title;
  }

  public setTitle(name: string) {
    this.title = name;
  }

  public getDescription():string {
    return this.description;
  }

  public setDescription(description: string) {
    this.description = description;
  }
  
}

export default Topic