import {View, Text, StyleSheet} from 'react-native'

export default function Content(){
    return (
        <View style={styles.content}>
          <Text>Artificial intelligence (AI), in its broadest sense, is intelligence exhibited by machines, particularly computer systems. It is a field of research in computer science that develops and studies methods and software that enable machines to perceive their environment and use learning and intelligence to take actions that maximize their chances of achieving defined goals.[1] Such machines may be called AIs.

Some high-profile applications of AI include advanced web search engines (e.g., Google Search); recommendation systems (used by YouTube, Amazon, and Netflix); interacting via human speech (e.g., Google Assistant, Siri, and Alexa); autonomous vehicles (e.g., Waymo); generative and creative tools (e.g., ChatGPT, Apple Intelligence, and AI art); and superhuman play and analysis in strategy games (e.g., chess and Go). However, many AI applications are not perceived as AI: "A lot of cutting edge AI has filtered into general applications, often without being called AI because once something becomes useful enough and common enough it's not labeled AI anymore."[2][3]

Alan Turing was the first person to conduct substantial research in the field that he called "machine intelligence".[4] Artificial intelligence was founded as an academic discipline in 1956,[5] by those now considered the founding fathers of AI: John McCarthy, Marvin Minksy, Nathaniel Rochester, and Claude Shannon.[6][7] The field went through multiple cycles of optimism,[8][9] followed by periods of disappointment and loss of funding, known as AI winter.[10][11] Funding and interest vastly increased after 2012 when deep learning surpassed all previous AI techniques,[12] and after 2017 with the transformer architecture.[13] This led to the AI boom of the early 2020s, with companies, universities, and laboratories overwhelmingly based in the United States pioneering significant advances in artificial intelligence.[14]

The growing use of artificial intelligence in the 21st century is influencing a societal and economic shift towards increased automation, data-driven decision-making, and the integration of AI systems into various economic sectors and areas of life, impacting job markets, healthcare, government, industry, education, propaganda, and disinformation. This raises questions about the long-term effects, ethical implications, and risks of AI, prompting discussions about regulatory policies to ensure the safety and benefits of the technology.

The various subfields of AI research are centered around particular goals and the use of particular tools. The traditional goals of AI research include reasoning, knowledge representation, planning, learning, natural language processing, perception, and support for robotics.[a] General intelligence—the ability to complete any task performable by a human on an at least equal level—is among the field's long-term goals.[15]

To reach these goals, AI researchers have adapted and integrated a wide range of techniques, including search and mathematical optimization, formal logic, artificial neural networks, and methods based on statistics, operations research, and economics.[b] AI also draws upon psychology, linguistics, philosophy, neuroscience, and other fields.[16]</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        //backgroundColor: "#545656",
        padding: 15
        //justifyContent: 'center',
        //alignItems: 'center'
      }
})