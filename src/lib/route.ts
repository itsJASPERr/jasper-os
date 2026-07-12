export function route(path = "") {
  return path.startsWith("/") ? path : `/${path}`;
}

export function isActive(href: string, currentPath: string) {
  return currentPath === href || currentPath.startsWith(`${href}/`);
}
