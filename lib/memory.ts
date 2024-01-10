import { Redis } from "@upstash/redis";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { Pinecone } from "@pinecone-database/pinecone";
import { PineconeStore } from "langchain/vectorstores/pinecone";

export type CompanionKey = {
  companionName: string;
  modelName: string;
  userId: string;
};

export class MemoryManager {
  private static instance: MemoryManager;
  private history: Redis;
  private verctorDBClient: Pinecone;

  public constructor() {
    this.history = Redis.fromEnv();
    this.verctorDBClient = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY!,
      environment: process.env.PINECONE_ENVIROMENT!,
    });
  }

  public async init() {
    if (this.verctorDBClient instanceof Pinecone) {
    }
  }
}
