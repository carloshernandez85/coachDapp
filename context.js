import React, { Component } from 'react'
import { coachInfo, reviews, detailInfo, news } from './data'

const InfoContext = React.createContext();


class InfoProvider extends Component {
    
    state = {
        info: coachInfo,
        reviews: reviews,
        detailInfo: detailInfo,
        news: news,
        // name: name,
        // avatar: avatar,
        // comment: comment
    }

    render() {
        return (
            <InfoContext.Provider 
                value={{
                    info: this.state.info,
                    reviews: this.state.reviews,
                    maps: this.state.maps,
                    detailInfo: this.state.detailInfo,
                    headerSubTitle: this.state.headerSubTitle,
                    news: this.state.news,
                    name: this.state.name,
                    avatar: this.state.avatar,
                    comment: this.state.comment
                }}
            >
            {this.props.children}
            </InfoContext.Provider>
        );
    }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };