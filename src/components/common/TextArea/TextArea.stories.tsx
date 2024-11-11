import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Common/textArea/TextArea",
  component: TextArea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const textBox: Story = {
  args: {
    label: "자기 소개",
    placeholder: "내용을 입력하세요",
  },
  decorators: [
    (Story, context) => {
      const [value, setValue] = useState("");
      return (
        <Story
          {...context}
          args={{
            ...context.args,
            value,
            onChange: (e) => setValue(e.target.value),
          }}
        />
      );
    },
  ],
};
