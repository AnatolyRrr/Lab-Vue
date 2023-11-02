import $axios from '@/lib/axios'

export const getPeople = (search = '', page = 1) => {
  return $axios.get(`/api/people?search=${search}&page=${page}`)
}

export const getPeopleById = (id: string) => {
  return $axios.get(`/api/people/${id}`)
}
