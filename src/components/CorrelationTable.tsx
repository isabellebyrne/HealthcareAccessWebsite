import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DataTable = () => {
  const [expanded, setExpanded] = useState(false);

  const rows = [
    {
      state: 'Alabama',
      correlation: 0.5552366442699489,
      pValue: 0.1531081887079585,
    },
    {
      state: 'Alaska',
      correlation: 0.5375428072505862,
      pValue: 0.1694320225455717,
    },
    {
      state: 'All States and DC (median)',
      correlation: 0.8512748836987957,
      pValue: 0.0073341161640552,
    },
    {
      state: 'All States, DC and Territories (median)',
      correlation: 0.8201811927977882,
      pValue: 0.0126461307465565,
    },
    {
      state: 'Arizona',
      correlation: 0.892090834259808,
      pValue: 0.0028925927739268,
    },
    {
      state: 'Arkansas',
      correlation: 0.8832238104417167,
      pValue: 0.0036405685888591,
    },
    {
      state: 'California',
      correlation: 0.885317911675016,
      pValue: 0.0034538532333719,
    },
    {
      state: 'Colorado',
      correlation: 0.7049134650071781,
      pValue: 0.0508597643658467,
    },
    {
      state: 'Connecticut',
      correlation: 0.8531739100259645,
      pValue: 0.0070673510424903,
    },
    {
      state: 'Delaware',
      correlation: 0.7052356132228575,
      pValue: 0.0507070189134273,
    },
    {
      state: 'District of Columbia',
      correlation: 0.6535631568727217,
      pValue: 0.0788100796776838,
    },
    {
      state: 'Florida',
      correlation: 0.8086862607999147,
      pValue: 0.0150899635881985,
    },
    {
      state: 'Georgia',
      correlation: 0.5024637667482202,
      pValue: 0.2044412867903708,
    },
    {
      state: 'Guam',
      correlation: 0.7927740968678647,
      pValue: 0.0189327150338656,
    },
    {
      state: 'Hawaii',
      correlation: 0.8001596906910999,
      pValue: 0.0170812226985847,
    },
    {
      state: 'Idaho',
      correlation: 0.7275926237011401,
      pValue: 0.0407733246636066,
    },
    {
      state: 'Illinois',
      correlation: 0.5331596804363288,
      pValue: 0.173614657601946,
    },
    {
      state: 'Indiana',
      correlation: 0.9249911716697894,
      pValue: 0.0009965962952798,
    },
    {
      state: 'Iowa',
      correlation: 0.7151597087771264,
      pValue: 0.0461361002822056,
    },
    {
      state: 'Kansas',
      correlation: 0.5013058148072965,
      pValue: 0.2056564220089559,
    },
    {
      state: 'Kentucky',
      correlation: 0.5903562008713217,
      pValue: 0.1233804418422265,
    },
    {
      state: 'Louisiana',
      correlation: 0.9550777144033455,
      pValue: 0.0002190671558861,
    },
    {
      state: 'Maine',
      correlation: -0.3077483293625003,
      pValue: 0.458369900772229,
    },
    {
      state: 'Maryland',
      correlation: 0.6126981398110122,
      pValue: 0.1063197840706165,
    },
    {
      state: 'Massachusetts',
      correlation: -0.5220163662366513,
      pValue: 0.1844956144950049,
    },
    {
      state: 'Michigan',
      correlation: 0.8607938345957942,
      pValue: 0.0060594684818543,
    },
    {
      state: 'Minnesota',
      correlation: 0.2916045951608668,
      pValue: 0.4834458042065501,
    },
    {
      state: 'Mississippi',
      correlation: 0.9242474786640604,
      pValue: 0.0010259462659743,
    },
    {
      state: 'Missouri',
      correlation: 0.7875086213217966,
      pValue: 0.0203261273667913,
    },
    {
      state: 'Montana',
      correlation: 0.9808379865433594,
      pValue: 1.733807780229988e-5,
    },
    {
      state: 'Nebraska',
      correlation: 0.7118591663880154,
      pValue: 0.0476274584381845,
    },
    {
      state: 'Nevada',
      correlation: 0.8047700759687986,
      pValue: 0.0159853198597962,
    },
    {
      state: 'New Hampshire',
      correlation: 0.6519873765917858,
      pValue: 0.0797831539758206,
    },
    {
      state: 'New Jersey',
      correlation: 0.7871855668713899,
      pValue: 0.0356499164535642,
    },
    {
      state: 'New Mexico',
      correlation: 0.8232083748777697,
      pValue: 0.0120472703557471,
    },
    {
      state: 'New York',
      correlation: 0.9006105562193514,
      pValue: 0.0022751616132963,
    },
    {
      state: 'North Carolina',
      correlation: 0.7079489013851966,
      pValue: 0.0494314587942738,
    },
    {
      state: 'North Dakota',
      correlation: -0.5706368650548935,
      pValue: 0.1396341501131523,
    },
    {
      state: 'Ohio',
      correlation: 0.8414377869642868,
      pValue: 0.0088187814774695,
    },
    {
      state: 'Oklahoma',
      correlation: 0.4236626508008353,
      pValue: 0.2955681875794278,
    },
    {
      state: 'Oregon',
      correlation: 0.718949678501976,
      pValue: 0.0444587929379314,
    },
    {
      state: 'Pennsylvania',
      correlation: 0.9241715666309198,
      pValue: 0.0010289734995381,
    },
    {
      state: 'Puerto Rico',
      correlation: 0.6224845508925699,
      pValue: 0.0992984377491109,
    },
    {
      state: 'Rhode Island',
      correlation: 0.902663890243227,
      pValue: 0.0021404545631754,
    },
    {
      state: 'South Carolina',
      correlation: 0.888895782998725,
      pValue: 0.0031493569789746,
    },
    {
      state: 'South Dakota',
      correlation: 0.2300401211067027,
      pValue: 0.5836499098857677,
    },
    {
      state: 'Tennessee',
      correlation: 0.6817432558768578,
      pValue: 0.0625769828933912,
    },
    {
      state: 'Texas',
      correlation: 0.6076841436659248,
      pValue: 0.1100235546924223,
    },
    {
      state: 'Utah',
      correlation: 0.5563768714154108,
      pValue: 0.1520871367678307,
    },
    {
      state: 'Vermont',
      correlation: 0.328822668777935,
      pValue: 0.4264580824629737,
    },
    {
      state: 'Virginia',
      correlation: 0.7971435905489421,
      pValue: 0.0178229459992785,
    },
    {
      state: 'Washington',
      correlation: 0.8002980313151727,
      pValue: 0.0170476742884364,
    },
    {
      state: 'West Virginia',
      correlation: 0.8388211062905865,
      pValue: 0.0092433933222356,
    },
    {
      state: 'Wisconsin',
      correlation: 0.6336674405436552,
      pValue: 0.0916103628682736,
    },
    {
      state: 'Wyoming',
      correlation: 0.4571388094161661,
      pValue: 0.254792092234244,
    },
  ];

  const handleAccordionChange = (index) => {
    setExpanded(expanded === index ? false : index);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='table-content'
        id='table-header'
      >
        <Typography variant="h6">
          <strong>State-wise Pearson Correlation and p-value Table</strong>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>State</strong>
                </TableCell>
                <TableCell align='right'>
                  <strong>Pearson Correlation</strong>
                </TableCell>
                <TableCell align='right'>
                  <strong>Pearson p-value</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.state}</TableCell>
                  <TableCell align='right'>
                    {row.correlation.toFixed(4)}
                  </TableCell>
                  <TableCell align='right'>{row.pValue.toFixed(4)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export default DataTable;
