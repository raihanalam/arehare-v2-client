// Packages Component
import { useState } from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent, Button,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,


} from '@mui/material';
;
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Packages = ({ packages, selectedTab, onSelect }) => (
     <Card variant="outlined">
          {/* Tabs for Package Selection */}
          <Tabs
               value={selectedTab}
               onChange={(e, val) => onSelect(val)}
               variant="fullWidth"
          >
               {packages.map((pkg) => (
                    <Tab
                         key={pkg.name}
                         label={
                              <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
                                   {pkg.name}
                              </Typography>
                         }
                    />
               ))}
          </Tabs>

          {/* Table to Show Features */}
          <Box>
               {packages.map((pkg, index) => (
                    <Box key={pkg.name} hidden={selectedTab !== index} sx={{ p: 2 }}>
                         <CardContent>
                              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                                   From - ${pkg.price}
                              </Typography>
                              <TableContainer>
                                   <Table size="small">
                                        <TableBody>
                                             {/* Delivery Time */}
                                             <TableRow>
                                                  <TableCell>Delivery Time</TableCell>
                                                  <TableCell>{pkg.delivery}</TableCell>
                                             </TableRow>
                                             {/* Number of Revisions */}
                                             <TableRow>
                                                  <TableCell>Number of Revisions</TableCell>
                                                  <TableCell>{pkg.revisions}</TableCell>
                                             </TableRow>
                                             {/* Source Code */}
                                             <TableRow>
                                                  <TableCell>Source Code</TableCell>
                                                  <TableCell>
                                                       {pkg.source === 1 ? <CheckCircleOutlineIcon color="success" /> : '-'}
                                                  </TableCell>
                                             </TableRow>
                                             {/* Prototype */}
                                             <TableRow>
                                                  <TableCell>Prototype</TableCell>
                                                  <TableCell>
                                                       {pkg.prototype === 1 ? <CheckCircleOutlineIcon color="success" /> : '-'}
                                                  </TableCell>
                                             </TableRow>
                                             {/* Features */}
                                             {/* <TableRow>
                       <TableCell>Features</TableCell>
                       <TableCell>{pkg.features}</TableCell>
                     </TableRow> */}
                                        </TableBody>
                                   </Table>
                              </TableContainer>

                              {/* Continue Button */}
                              <Button
                                   variant="contained"
                                   fullWidth
                                   sx={{
                                        mt: 3,
                                        backgroundColor: '#1976d2',
                                        color: '#fff',
                                        '&:hover': { backgroundColor: '#115293' },
                                   }}
                              >
                                   Continue
                              </Button>
                         </CardContent>
                    </Box>
               ))}
          </Box>
     </Card>
);


export default Packages;