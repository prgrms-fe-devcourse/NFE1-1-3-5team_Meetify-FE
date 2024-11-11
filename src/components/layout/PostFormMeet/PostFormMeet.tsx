import { useState, useEffect } from "react";
import { validatePostFormMeet } from "../../../utils/postValidation";
import Select from "../../common/CustomSelect/CustomSelect";
import Title from "../../common/Title/Title";
import Button from "../../common/button/Button";
import Input from "../../common/input/Input";
import TextEditor from "../../common/TextEditor/TextEditor";
import { SelectOption } from "../../../types/types";
import {
  ParticipationMethodOptions,
  AffiliationOptions,
  InterestsOptions,
  PositionOptions,
  AvailableTimeOptions,
} from "../../../constants/options";
import { FORM_TITLES, PLACEHOLDERS } from "../../../constants/PostForm";
import { PostFormMeetData } from "../../../types/Post";
import {
  Section,
  Row,
  FormColumn,
  ButtonWrapper,
  PostFormContainer,
} from "./PostFormMeet.styles";
import { toast } from "react-toastify";
interface PostFormProps {
  title: string;
  onSubmit: (data: PostFormMeetData) => void;
  onCancel: () => void;
  initialData?: PostFormMeetData; // 초기 데이터를 받을 수 있도록 추가
}

const PostFormMeet: React.FC<PostFormProps> = ({
  onSubmit,
  onCancel,
  initialData,
}) => {
  const [inputValue, setInputValue] = useState(initialData?.inputValue || "");
  const [content, setContent] = useState<string>(initialData?.content || "");

  const [participationMethod, setParticipationMethod] =
    useState<SelectOption | null>(initialData?.participationMethod || null);
  const [interests, setInterests] = useState<SelectOption[]>(
    initialData?.interests || []
  );
  const [affiliation, setAffiliation] = useState<SelectOption | null>(
    initialData?.affiliation || null
  );
  const [position, setPosition] = useState<SelectOption[]>(
    initialData?.position || []
  );
  const [availableTime, setAvailableTime] = useState<SelectOption | null>(
    initialData?.availableTime || null
  );

  useEffect(() => {
    if (initialData) {
      setInputValue(initialData.inputValue);
      setContent(initialData.content);
      setParticipationMethod(initialData.participationMethod);
      setInterests(initialData.interests);
      setAffiliation(initialData.affiliation);
      setPosition(initialData.position);
      setAvailableTime(initialData.availableTime);
    }
  }, [initialData]);

  const handleSubmit = () => {
    const formData: PostFormMeetData = {
      inputValue,
      content,
      participationMethod,
      interests,
      affiliation,
      position,
      availableTime,
    };
    // 폼 검증 후 제출
    if (validatePostFormMeet(formData)) {
      onSubmit(formData);
      if (initialData) {
        // Toastify 알림 표시
        toast.success("게시글이 수정되었습니다.");
      } else toast.success("게시글이 작성되었습니다.");
    }
  };

  return (
    <PostFormContainer>
      <Section>
        <Title text={FORM_TITLES.POST_FORM_MEET} stepNumber={1} />
        <Row>
          <FormColumn>
            <Select
              label="선호 진행 방식"
              options={ParticipationMethodOptions}
              placeholder={PLACEHOLDERS.PARTICIPATION_METHOD}
              onChange={(value) =>
                setParticipationMethod(value as SelectOption)
              }
              value={participationMethod}
            />
          </FormColumn>
          <FormColumn>
            <Select
              label="관심 분야"
              options={InterestsOptions}
              placeholder={PLACEHOLDERS.INTERESTS_MEET}
              onChange={(value) => setInterests(value as SelectOption[])}
              value={interests}
              isMulti={true}
            />
          </FormColumn>
          <FormColumn>
            <Select
              label="소속"
              options={AffiliationOptions}
              placeholder={PLACEHOLDERS.AFFILIATION}
              onChange={(value) => setAffiliation(value as SelectOption)}
              value={affiliation}
            />
          </FormColumn>
          <FormColumn>
            <Select
              label="직무"
              options={PositionOptions}
              placeholder={PLACEHOLDERS.POSITION}
              onChange={(value) => setPosition(value as SelectOption[])}
              value={position}
              isMulti={true}
            />
          </FormColumn>
          <FormColumn>
            <Select
              label="참여 가능 시간(주)"
              options={AvailableTimeOptions}
              placeholder={PLACEHOLDERS.AVAILABLE_TIME}
              onChange={(value) => setAvailableTime(value as SelectOption)}
              value={availableTime}
            />
          </FormColumn>
        </Row>
      </Section>

      <Section>
        <Title text={FORM_TITLES.MEET_INTRO} stepNumber={2} />
        <Input
          label="제목"
          placeholder={PLACEHOLDERS.TITLE}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <TextEditor
          value={content}
          placeholder={PLACEHOLDERS.CONTENT}
          onChange={(value) => setContent(value)}
        />
      </Section>

      <ButtonWrapper>
        <Button
          buttonType="outline"
          buttonSize="medium"
          label="취소"
          onClick={onCancel}
        />
        <Button
          buttonType="fill"
          buttonSize="medium"
          label={initialData ? "수정" : "작성"}
          onClick={handleSubmit}
        />
      </ButtonWrapper>
    </PostFormContainer>
  );
};

export default PostFormMeet;
