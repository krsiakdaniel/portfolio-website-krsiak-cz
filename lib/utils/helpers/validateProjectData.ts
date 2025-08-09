/**
 * Validates that project data exists and is not falsy
 * @param projectData - The project data to validate
 * @param errorMessage - Optional custom error message
 * @throws Error if project data is falsy
 */
export const validateProjectData = <T>(
  projectData: T | undefined | null,
  errorMessage = 'Project data not found.',
): T => {
  if (!projectData) {
    throw new Error(errorMessage)
  }

  return projectData
}
