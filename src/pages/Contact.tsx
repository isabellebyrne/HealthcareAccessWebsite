import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper.tsx";
import LitReviewTemp from "../components/LitReviewTemp.tsx";
import { Tabs, Tab, Box } from "@mui/material";

const Contact: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <PageWrapper>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="LitReview Tabs"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Review 1" />
        <Tab label="Review 2" />
        <Tab label="Review 3" />
        <Tab label="Review 4" />
        <Tab label="Review 5" />
        <Tab label="Review 6" />
        <Tab label="Review 7" />
        <Tab label="Review 8" />
        <Tab label="Review 9" />
        <Tab label="Review 10" />
        <Tab label="Review 11" />
        <Tab label="Review 12" />
      </Tabs>
      </Box>

      {/* Render the appropriate LitReviewTemp based on the selected tab */}
      {selectedTab === 0 && (
      <LitReviewTemp
        number={1}
        source="IEEE Xplore"
        citation={<a href="https://doi.org/10.1109/JAS.2021.1003865" target="_blank" rel="noopener noreferrer">Xiong, Dezhen, et al. “Deep Learning for EMG-based Human-Machine Interaction: A Review.” IEEE/CAA Journal of Automatica Sinica, vol. 8, no. 3, Mar. 2021, pp. 512-533.</a>}
        summarize="This review article provides an in-depth analysis of how deep learning is utilized for EMG-based human-machine interaction, focusing on the advancements and current limitations in prosthetic control systems. Xiong et al. outline the effectiveness of deep learning models in processing electromyography (EMG) signals, with a heavy focus on data acquisition, feature extraction, and classification techniques, as well as new issues such as 'multimodal sensing, inter-subject/inter-session, and robustness toward disturbances' (Xiong et al). The authors also discuss the challenges and future directions of EMG-based human-machine interaction, emphasizing the need for robust, real-time control systems for prosthetic devices."
        evaluate="This source is published in the IEEE/CAA Journal of Automatica Sinica, a peer-reviewed journal known for its high standards and rigorous review process. The authors are established researchers in machine learning and human-machine interaction, lending significant credibility to the work."
        discuss="This article is relevant to my focus on integrating advanced control mechanisms in robotic prosthetics. The detailed analysis of deep learning techniques for EMG-based control systems provides valuable insights into the current state of the field and potential areas for improvement. It also highlights current challenges that my project can address, such as optimizing data processing and model training for real-world application."
      />
      )}
      {selectedTab === 1 && (
      <LitReviewTemp
        number={2}
        source="INQUIRY Journal"
        citation={<a href="https://doi.org/10.1177/00469580241266364" target="_blank" rel="noopener noreferrer">Lu, Hui, et al. “Patient Autonomy in Medical Education: Navigating Ethical Challenges in the Age of Artificial Intelligence.” INQUIRY: The Journal of Health Care Organization, Provision, and Financing, 2024.</a>}
        summarize="This article discusses the ethical implications of artifical intelligence and patient care, particularly patient autonomy, and the integration of AI into medical education. The authors argue that current medical education must adapt to address issues such as 'data privacy, informed consent, algorithmic biases, and technology-mediated patient care' (Lu et al., 2024). The article provides a comprehensive overview of the ethical challenges and considerations surrounding AI in healthcare, emphasizing the importance of patient-centered care and ethical decision-making."
        evaluate="The source is credible, published in INQUIRY, a well-respected, peer-reviewed journal known for its content in healthcare research. The authors, including experts in medical education and AI, support their claims with comprehensive references and analysis, ensuring the article’s reliability and academic value."
        discuss="This source is highly relevant for examining the ethical considerations of AI in the medical field. It provides a framework for discussing how medical professionals should be trained to manage the balance between technological control and patient autonomy. This insight can support my project’s focus on the ethical development of advanced medical technology."
      />
      )}
      {selectedTab === 2 && (
      <LitReviewTemp
        number={3}
        source="Pew Research Center"
        citation={<a href="https://www.pewresearch.org/religion/2016/07/26/human-enhancement-the-scientific-and-ethical-dimensions-of-striving-for-perfection/" target="_blank" rel="noopener noreferrer">Masci, David. “Human Enhancement: The Scientific and Ethical Dimensions of Striving for Perfection.” Pew Research Center, 26 July 2016.</a>}
        summarize="This web article from the Pew Research Center explores the scientific and ethical implications of human enhancement, like genetic engineering, brain chips, and synthetic blood. Masci discusses recent breakthoughs and what it could mean for our future, including the potential for 'superhumans' and the ethical dilemmas that come with it (Masci). The article also touches on the societal impacts of human enhancement, such as the potential for increased inequality and discrimination."
        evaluate="The Pew Research Center is a reputable organization known for its nonpartisan, fact-based research. While the article is not peer-reviewed, it provides valuable insights into the public perception and ethical considerations of human enhancement"
        discuss="This source is highly relevant to my project's exploration of advanced medical technology and its societal implications. It raises important questions about the ethical boundaries of human enhancement and the potential consequences of technological advancements in healthcare. By considering these perspectives, my project can address the broader societal impacts of medical innovation."
      />
      )}
      {selectedTab === 3 && (
      <LitReviewTemp
        number={4}
        source="NPR Video"
        citation={<a href="https://www.npr.org/2024/10/04/g-s1177-26173/bionic-limbs-can-now-feel-real-thanks-to-new-surgery" target="_blank" rel="noopener noreferrer">NPR. (2024, October 4). Bionic limbs can now feel ‘real’ thanks to new surgery.</a>}
        summarize="The NPR video “Bionic limbs can now feel ‘real’ thanks to new surgery” describes recent advancements in prosthetic technology through a novel surgical approach known as the Agonist-Antagonist Myoneural Interface (AMI). Developed by MIT professor Hugh Herr, this procedure preserves muscle function and the natural brain-body connection after amputation, enabling the patient to feel and control a prosthetic limb in a way that mimics a biological limb. Jim Ewing, an experienced climber, was the first recipient of this surgery in 2016, and he reported a profound sense of “neural embodiment,” where his brain perceived the prosthetic as part of his body (NPR, 2024). Herr explains that AMI allows for a natural range of motion and feedback, which is missing in traditional amputation methods. This breakthrough represents a significant improvement over previous bionic technologies since it preserves proprioception."
        evaluate="NPR is a highly reputable and widely respected news organization known for its in-depth journalism and commitment to factual reporting. This article is based on an interview with Hugh Herr, an expert in bionics and a professor at MIT, which enhances the article’s credibility due to Herr’s expertise and direct involvement in the development of the technology. Furthermore, NPR provides a well-documented transcript, ensuring transparency and accuracy in the reporting process. The source’s credibility is strengthened by NPR’s rigorous editorial standards and its reputation as a reliable source for science and technology news."
        discuss="This source is relevant to discussions on advancements in prosthetic technology and its implications for improving quality of life among amputees. Herr’s insights and the positive outcomes observed in Jim Ewing’s case provide empirical support for the argument that bionic limbs are approaching functionality and sensation comparable to biological limbs. This aligns with themes of technological innovation as a pathway to restoring physical function and autonomy in individuals with disabilities, but also that technology is rapidly advancing and we need to be careful about how we move forward."
      />
      )}
      {selectedTab === 4 && (
      <LitReviewTemp
        number={5}
        source="Cryptopolitan"
        citation={<a href="https://www.cryptopolitan.com/whats-the-science-of-new-humans/" target="_blank" rel="noopener noreferrer">Wayas, Ibiam. “What’s the Science of New Humans?” Cryptopolitan, December 5, 2023.</a>}
        summarize="This article explores the concept of human enhancement and the potential for 'new humans' through advanced technologies like genetic engineering, nanotechnology, artificial intelligence, and other synthetic biologies. 'The term “new human” refers to people who have been altered in some way, either for medical purposes or potentially for future enhancement' (Wayas, 2023). Wayas discusses the scientific advancements that could lead to enhanced human capabilities, such as increased intelligence, longevity, and physical strength. The article also addresses the ethical and societal implications of human enhancement"
        evaluate="Cryptopolitan is a digital news platform that covers a wide range of topics, including technology, finance, and science. While the article is not peer-reviewed, it provides an accessible overview of the scientific and ethical dimensions of human enhancement."
        discuss="This source is relevant as it discusses real-world human enhancement technologies, providing context for the themes of human augmentation and ethics in Cyberpunk 2077. It parallels the discussion about prosthetics and bioengineering in both fiction and reality, highlighting potential future developments."
      />
      )}
      {selectedTab === 5 && (
      <LitReviewTemp
        number={6}
        source="TechXplore"
        citation={<a href="https://techxplore.com/news/2024-07-bio-hybrid-robotics-debate.html" target="_blank" rel="noopener noreferrer">Bio-hybrid Robotics Sparks Ethical and Policy Debate, TechXplore, July 2024.</a>}
        summarize="This article explores the ethical and policy challenges surrounding bio-hybrid robotics, a field that integrates living tissue with mechanical components (TechXplore, 2024). The emergence of these semi-living robots has prompted concerns about ecological impact, the need for new ethical frameworks, and the potential consequences of such technologies on societal norms. Experts stress the importance of addressing these issues early to prevent unintended consequences and to guide responsible development."
        evaluate="TechXplore is a well-regarded online publication focusing on technological advancements, particularly in robotics and engineering. The website often references expert sources and provides up-to-date news, making it a reliable source for understanding current trends in technology and science. However, as an online news outlet, it lacks the depth of academic journal articles, so further research from scholarly sources would be good to confirm information."
        discuss="This source is relevant as it discusses real-world human enhancement technologies, providing context for the themes of human augmentation and ethics aswell in Cyberpunk 2077. Bio-hybrid robotics is a cutting-edge field that raises important questions about the ethical implications of merging living organisms with machines. By examining these debates, my project can explore the ethical considerations of advanced medical technologies and their impact on society."
      />
      )}
      {selectedTab === 6 && (
      <LitReviewTemp
        number={7}
        source="Frontiers in Systems Neuroscience"
        citation={<a href="https://doi.org/10.3389/fnsys.2014.00228" target="_blank" rel="noopener noreferrer">Shook, John R., et al. "Cognitive Enhancement Kept Within Contexts: Neuroethics and Informed Public Policy." Frontiers in Systems Neuroscience, vol. 8, 2014.</a>}
        summarize="This article examines the ethical and societal implications of cognitive enhancement technologies, emphasizing that such types of advancements cannot be properly assessed without considering their cultural and situational contexts (Shook et al.). The authors argue that public policy on cognitive enhancement should be guided by neuroethical principles. They stress the need for public awareness and debate to ensure enhancements align with collective ethical standards rather than unchecked enthusiasm for technological progress."
        evaluate="This peer-reviewed article appears in a respected neuroscience journal, providing academic credibility. The authors include researchers from recognized institutions with expertise in neuroethics and policy, further reinforcing its reliability. The use of empirical studies and comprehensive references strengthens its credibility."
        discuss="This article supports my thesis by addressing the ethical dilemmas of human enhancement, particularly the balance between corporate-driven advancements and societal needs. Its focus on the socio-cultural context of enhancement aligns with discussions about accessibility and fairness in robotic prosthetics, offering a framework for analyzing how corporate priorities might conflict with public good."
      />
      )}
      {selectedTab === 7 && (
      <LitReviewTemp
        number={8}
        source="CNN"
        citation={<a href="https://www.commonwealthfund.org/publications/issue-briefs/2023/jan/us-health-care-global-perspective-2022" target="_blank" rel="noopener noreferrer">Gunja, Munira Z., et al. "U.S. Health Care from a Global Perspective, 2022: Accelerating Spending, Worsening Outcomes." Commonwealth Fund, 31 Jan. 2023.</a>}
        summarize="This article examines the state of healthcare in the United States and how the US compares to other countries. The authors cite a report done by The Commonwealth Fund, that shows the US lags far behind other nations, ranking last on access to care and health outcomes, yet the US spends the most on healthcare. "
        evaluate="CNN, a popular news site, while not a peer-reviewed journal, is a reputable source for news and current events. The article is based on a report from The Commonwealth Fund, a well-known organization that conducts research on healthcare systems. The information is presented in a clear and accessible manner, making it easy to understand for a general audience."
        discuss="This source is relevant to my project as it highlights the state of the country's health care system. It could be interesting to see how we project into the future, and how the US could improve its healthcare system to better serve its citizens."
      />
      )}
      {selectedTab === 8 && (
      <LitReviewTemp
        number={9}
        source="Automation.com"
        citation={<a href="https://www.automation.com/en-us/articles/july-2024/cybersecurity-risks-surgical-robots-healthcare" target="_blank" rel="noopener noreferrer">Amos, Zac. "Cybersecurity Risks of Surgical Robots in Healthcare." Automation.com, 25 July 2024.</a>}
        summarize="This article highlights the growing cybersecurity risks associated with integrating surgical robots into healthcare systems. Amos discusses vulnerabilities like ransomware attacks, unauthorized access, and data breaches, all of which threaten patient safety and operational continuity (Amos). The article emphasizes the importance of robust defense strategies, including multi-factor authentication, encrypted communications, and regular system updates, to safeguard these advanced technologies. "
        evaluate="The article is published on Automation.com, a platform affiliated with the International Society of Automation (ISA), which specializes in industrial automation and cybersecurity. The author, Zac Amos, is a Features Editor with expertise in cybersecurity and AI, lending credibility to the analysis."
        discuss="This article connects directly to my thesis by addressing the technological challenges in ensuring the safe and ethical integration of medical technologies. It highlights how corporate priorities might impact investment in cybersecurity, affecting both patient safety and the equitable use of surgical robots. Its insights on proactive defense strategies could inform discussions about regulatory policies for robotic prosthetics."
      />
      )}
      {selectedTab === 9 && (
      <LitReviewTemp
        number={10}
        source="Commonwealth Fund"
        citation={<a href="https://www.commonwealthfund.org/publications/issue-briefs/2023/jan/us-health-care-global-perspective-2022" target="_blank" rel="noopener noreferrer">Gunja, Munira Z., et al. "U.S. Health Care from a Global Perspective, 2022: Accelerating Spending, Worsening Outcomes." Commonwealth Fund, 31 Jan. 2023.</a>}
        summarize="This report compares U.S. healthcare spending and outcomes with those of other high-income nations, revealing that the U.S. spends nearly twice as much per capita yet experiences poorer outcomes, such as lower life expectancy and higher rates of preventable deaths (Gunja et al.). The authors highlight systemic issues like lack of universal coverage, high out-of-pocket costs, and disparities in access to care, arguing for better investment in preventative services and cost-containment strategies."
        evaluate="The Commonwealth Fund is a highly respected organization known for its focus on health policy research and global comparisons. The report is well-supported by data from credible sources, such as the OECD, making it a reliable resource for understanding healthcare inefficiencies in the U.S."
        discuss="This report complements my thesis by demonstrating how systemic healthcare inequities and high costs impact access to advanced medical technologies like robotic prosthetics. Its emphasis on cost-containment strategies and universal coverage aligns with my exploration of how corporate priorities and policy gaps shape accessibility and affordability."
      />
      )}
      {selectedTab === 9 && (
      <LitReviewTemp
        number={10}
        source="Tedx"
        citation={<a href="https://www.ted.com/talks/anita_burroughs_how_to_understand_us_healthcare_follow_the_money?subtitle=en" target="_blank" rel="noopener noreferrer">Burroughs, Jonathan. How to Understand U.S. Healthcare: Follow the Money. TED, https://www.ted.com/talks/anita_burroughs_how_to_understand_us_healthcare_follow_the_money?subtitle=en.</a>}
        summarize="In his TED Talk, Dr Burroughs critiques the U.S. healthcare system, pointing out how profit-driven incentives compromise patient outcomes. He explains how Medicare reimbursement rates are influenced by corporate lobbying, often prioritizing high-cost procedures over preventative care or patient well-being (Burroughs). He also highlights inefficiencies, like end-of-life care practices that drive up costs unnecessarily."
        evaluate="As a TED Talk, the content is credible and engaging, backed by Dr. Burroughs' expertise in analyzing healthcare systems. However, while persuasive, it should be cross-referenced with data or studies for a more objective view."
        discuss="This talk complements my thesis by showing how corporate priorities shape healthcare costs and accessibility. It underscores the need for structural reforms to align medical technologies with public health goals instead of profit motive."
      />
      )}
      {selectedTab === 10 && (
      <LitReviewTemp
        number={11}
        source="NCBI Bookshekf"
        citation={<a href="https://www.ncbi.nlm.nih.gov/books/NBK54296/b" target="_blank" rel="noopener noreferrer">Institute of Medicine (US) Roundtable on Value & Science-Driven Health Care. Clinical Data as the Basic Staple of Health Learning: Creating and Protecting a Public Good. National Academies Press (US), 2010. https://www.ncbi.nlm.nih.gov/books/NBK54296/.</a>}
        summarize="This report emphasizes the critical role clinical data play in transforming the U.S. healthcare system into a learning health system. It highlights the fragmentation of data sources, barriers to interoperability, and the potential of standardized electronic health records (EHRs) to drive evidence-based decision-making (Institute of Medicine). The authors advocate for robust data-sharing frameworks to improve care quality, accessibility, and efficiency."
        evaluate="Published by the National Academies Press and authored by the Institute of Medicine, this book is authoritative and rigorously vetted. It provides insights drawn from experts across healthcare, policy, and data science, ensuring a balanced and reliable analysis."
        discuss="This book aligns with my thesis by addressing how data standardization and accessibility can improve healthcare systems. Its discussion on leveraging EHRs and reducing fragmentation directly supports the argument for digitizing medical records and using data-driven strategies to enhance the accessibility of technologies like robotic prosthetics."
      />
      )}
      {selectedTab === 11 && (
      <LitReviewTemp
        number={12}
        source="Kaiser Family Foundation (KFF)"
        citation={<a href="https://www.kff.org/health-costs/issue-brief/americans-challenges-with-health-care-costs/" target="_blank" rel="noopener noreferrer">Lopes, Lunna, et al. "Americans’ Challenges with Health Care Costs." KFF, 1 Mar. 2024, https://www.kff.org/health-costs/issue-brief/americans-challenges-with-health-care-costs/.</a>}
        summarize="This brief examines how healthcare costs in the U.S. burden families, influencing decisions about insurance, care, and finances. The authors highlight that nearly half of U.S. adults struggle with healthcare affordability, with uninsured and low-income populations disproportionately affected (Lopes et al.). The report also discusses how costs lead many to delay or forgo necessary care, emphasizing the systemic inequities in healthcare access."
        evaluate="The Kaiser Family Foundation is a well-established, nonpartisan organization that provides high-quality research and data on healthcare policy. The report is based on credible surveys and analyses, making it a reliable source for understanding healthcare challenges."
        discuss="This source supports my thesis by highlighting the economic barriers to accessing medical advancements. Its data on healthcare affordability aligns with my argument that corporate and systemic inefficiencies worsen disparities in technology accessibility."
      />
      )}
    </PageWrapper>
  );
};

export default Contact;
