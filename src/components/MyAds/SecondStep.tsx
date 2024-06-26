import { Box, Typography, TextareaAutosize } from "@mui/material";
import React from "react";
import CountrySelector from "../Location/Location";

export default function SecondStep({ updateFields }: { updateFields: (e: { target: { name: string, value: any } }) => void }) {
    return (
        <Box className="flex flex-col  justify-center items-center  w-full ">
            <Typography sx={{ color: "black", fontWeight: "bold" }}>
                Almost finished on this step!
            </Typography>
            <Typography sx={{ color: "black" }}>
                You can add additional information according to your
                preferences.
            </Typography>
            <Box className="w-full flex justify-center  gap-8 items-center mt-10  ">
                <Box className="w-[40%]">
                    <Typography sx={{ color: "grey" }}>
                        Select the country
                    </Typography>
                    <CountrySelector countryMethod={(selectedCountry: any) => updateFields({ target: { name: "country", value: selectedCountry.label } })} />
                    <Typography sx={{ marginBlock: 2, color: "grey" }}>
                        You can add conditions here:
                    </Typography>
                    <TextareaAutosize
                        onChange={updateFields}
                        name="condition"
                        minRows={4}
                        maxRows={4}
                        placeholder="Enter your text here"
                        style={{ width: "100%" }}
                        className="border rounded-lg p-2 resize-none overflow-y-auto"
                    />{" "}
                </Box>
                <Box className="w-[40%]">
                    <Typography color="grey">
                        You can add an automatic message
                    </Typography>
                    <TextareaAutosize
                        onChange={updateFields}
                        name="message"
                        minRows={4}
                        maxRows={4}
                        placeholder="Enter your text here"
                        style={{ width: "100%" }}
                        className="border rounded-lg p-2 overflow-y-auto resize-none"
                    />{" "}
                    <Typography sx={{ marginTop: 2, color: "grey" }}>
                        You can add up to three restrictions:
                    </Typography>
                    <TextareaAutosize
                        onChange={updateFields}
                        name="terms"
                        minRows={2}
                        maxRows={2}
                        placeholder="Enter your text here"
                        style={{ width: "100%" }}
                        className="border rounded-lg p-2 overflow-y-auto resize-none "
                    />
                </Box>
            </Box>
        </Box>
    )
}