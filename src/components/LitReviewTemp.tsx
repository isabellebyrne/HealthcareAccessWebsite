import React from 'react';

interface LitReviewTempProps {
    number: number;
    source: string;
    citation: string;
    summarize: string;
    evaluate: string;
    discuss: string;
}

const Paragraph: React.FC<{ text: string }> = ({ text }) => {
    return <span style={{ marginTop: 0 }}>{text}</span>;
};


const Heading: React.FC<{ text: string }> = ({ text }) => {
    return <h3 style={{ marginBottom: 0 }}>{text}</h3>;
};

const LitReviewTemp: React.FC<LitReviewTempProps> = ({ number, source, citation, summarize, evaluate, discuss }) => {
    return (
        <div>
            <h2>Source #{number}: {source}</h2>
            <Heading text="Full Citation" />
            <Paragraph text={citation} />
            <Heading text="Summarize the source using formal language. Use at least one in-text citation:" />
            <Paragraph text={summarize} />
            <Heading text="Evaluate the credibility of the source" />
            <Paragraph text={evaluate} />
            <Heading text="Discuss how this source applies to your topic/thesis" />
            <Paragraph text={discuss} />
        </div>
    );
};

export default LitReviewTemp;

