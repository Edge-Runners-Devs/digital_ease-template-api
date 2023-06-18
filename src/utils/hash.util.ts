import { compare, hash } from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
}

export async function comparePassword(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  const result = await compare(password, hashedPassword);
  return result;
}
