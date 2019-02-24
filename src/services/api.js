class ApiService {
  constructor() {
    this.apiUrl = 'https://assessments.bzzhr.net/calendar/?format=json&paginate_by=3000';
    this.nextPage = null;
  }

  fetchCalendarEvents() {
    return fetch(this.apiUrl).then((res) => {
      if (res.status === 200) {
        return res.json().then((data) => {
          this.nextPage = data.next;
          return data.results;
        });
      }
    })
  }
}

export default new ApiService();