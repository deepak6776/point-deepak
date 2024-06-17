"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react'

interface Props {
  id?: string;
  verified?: boolean;
}

export default function EmailVerificationBanner({ id, verified }: Props) {
  const [submitting, setSubmitting] = useState(false);
  console.log(id)

  const applyForReverification = async () => {
    if (!id) return;

    setSubmitting(true);
    const res = await fetch("/api/users/verify?userId=" + id, {
      method: "GET",
    });
    const { message, error } = await res.json();
    if (!res.ok && error) {
      toast.error(error);
    }

    toast.success(message);
    setSubmitting(false);
  };

  if (verified) return null;

  return (
    <div className="p-2 text-center bg-blue-50">
      <span>{`It looks like you haven't verified your email.`}</span>
      <Button type="submit" className="w-full" disabled={submitting} onClick={applyForReverification}>
        {submitting ? "Generating link..." : "Get verification link."}
      </Button>
      {/* <button
        disabled={submitting}
        onClick={applyForReverification}
        className="ml-2 font-semibold underline"
      >
        {submitting ? "Generating link..." : "Get verification link."}
      </button> */}
    </div>
  );
}
