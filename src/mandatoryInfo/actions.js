export const MANDATORY_USERNAME = 'mandatoryInfo/MANDATORY_USERNAME'
export const MANDATORY_REPOSITORY = 'mandatoryInfo/MANDATORY_REPOSITORY'

export function mandatoryUsername(data) {
  return {type: MANDATORY_USERNAME, data: data};
}
export function mandatoryRepository(data) {
  return {type: MANDATORY_REPOSITORY, data: data};
}