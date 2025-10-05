export function isLocalDevelopment(): boolean {
  return process.env.NODE_ENV !== 'production';
}
