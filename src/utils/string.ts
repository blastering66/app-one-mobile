/**
 * String Utility Functions
 */

/**
 * Capitalize the first letter of a string
 */
export const capitalize = (str: string): string => {
  if (!str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Truncate a string to a maximum length
 */
export const truncate = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) {
    return str;
  }
  return `${str.slice(0, maxLength - 3)}...`;
};

/**
 * Format a name (first letter uppercase, rest lowercase)
 */
export const formatName = (name: string): string => {
  return name
    .split(' ')
    .map(word => capitalize(word.toLowerCase()))
    .join(' ');
};
