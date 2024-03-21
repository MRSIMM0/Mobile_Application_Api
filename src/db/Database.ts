import { MongoClient, Db, Collection, WithId } from 'mongodb';

export class Database {
  private static instance: Database;
  private db: Db | undefined;

  uri = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`
  
  private client: MongoClient;

  private constructor() {
    this.client = new MongoClient(this.uri);
  }

  static async getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
      await Database.instance.connect();
    }
    return Database.instance;
  }

  private async connect() {
    await this.client.connect();
    this.db = this.client.db('trails');
  }

  async findAll(): Promise<any[] | undefined> {
    const collections = await this.db?.listCollections().toArray();

    if (!collections) {
        return undefined;
    }

    const dataPromises = collections.map((collection) => {
        return this.db?.collection(collection.name).find().toArray();
    });

    const data = await Promise.all(dataPromises);

    return data.flat();
}

  async find(collectionName: string, query: object): Promise<any[]> {
    const collection: Collection = this.db!.collection(collectionName);
    return collection.find(query).toArray();
  }
}