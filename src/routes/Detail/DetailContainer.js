import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
      videos: false,
      production_companies: false,
      production_countries: false,
      spoken_languages: false,
      seasons: false,
      origin_country: false
    };
  }

  toggleVideos = () => {
    this.setState({
      videos: true
    });
  };

  toggleCompanies = () => {
    this.setState({
      production_companies: true
    });
  };

  toggleCountries = () => {
    this.setState({
      production_countries: true
    });
  };

  toggleLanguages = () => {
    this.setState({
      spoken_languages: true
    });
  };

  toggleSeasons = () => {
    this.setState({
      seasons: true
    });
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't process it" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const {
      result,
      isMovie,
      error,
      loading,
      videos,
      production_companies,
      production_countries,
      spoken_languages,
      seasons,
      origin_country
    } = this.state;
    return (
      <DetailPresenter
        result={result}
        isMovie={isMovie}
        error={error}
        loading={loading}
        videos={videos}
        production_companies={production_companies}
        production_countries={production_countries}
        spoken_languages={spoken_languages}
        seasons={seasons}
        origin_country={origin_country}
        toggleCountries={this.toggleCountries}
        toggleCompanies={this.toggleCompanies}
        toggleVideos={this.toggleVideos}
        toggleLanguages={this.toggleLanguages}
        toggleSeasons={this.toggleSeasons}
        toggleOriginCountry={this.toggleOriginCountry}
      />
    );
  }
}
