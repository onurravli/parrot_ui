import React from 'react';

import AccordionPage from './AccordionPage';
import AlertDialogPage from './AlertDialogPage';
import AlertPage from './AlertPage';
import AvatarPage from './AvatarPage';
import BadgePage from './BadgePage';
import BreadcrumbPage from './BreadcrumbPage';
import ButtonPage from './ButtonPage';
import CalendarPage from './CalendarPage';
import CardPage from './CardPage';
import CarouselPage from './CarouselPage';
import CheckboxPage from './CheckboxPage';
import CollapsePage from './CollapsePage';
import ColorPickerPage from './ColorPickerPage';
import ComboboxPage from './ComboboxPage';
import CopyButtonPage from './CopyButtonPage';
import DatePickerPage from './DatePickerPage';
import DialogPage from './DialogPage';
import DrawerPage from './DrawerPage';
import DropdownPage from './DropdownPage';
import FormPage from './FormPage';
import HighlightPage from './HighlightPage';
import HoverCardPage from './HoverCardPage';
import IndicatorPage from './IndicatorPage';
import InputPage from './InputPage';
import LoaderPage from './LoaderPage';
import MultiSelectPage from './MultiSelectPage';
import NavigationMenuPage from './NavigationMenuPage';
import NumberInputPage from './NumberInputPage';
import PaginationPage from './PaginationPage';
import PasswordInputPage from './PasswordInputPage';
import PopoverPage from './PopoverPage';
import ProgressPage from './ProgressPage';
import RadioGroupPage from './RadioGroupPage';
import RatingPage from './RatingPage';
import ResizablePage from './ResizablePage';
import ScrollAreaPage from './ScrollAreaPage';
import SelectPage from './SelectPage';
import SkeletonPage from './SkeletonPage';
import SliderPage from './SliderPage';
import SwitchPage from './SwitchPage';
import TablePage from './TablePage';
import TabsPage from './TabsPage';
import TextareaPage from './TextareaPage';
import TimelinePage from './TimelinePage';
import ToastPage from './ToastPage';
import TooltipPage from './TooltipPage';
import UploadPage from './UploadPage';

interface ComponentsPageProps {
  slug: string;
}

export default function ComponentPage({ slug }: ComponentsPageProps) {
  if (slug === 'accordion') return <AccordionPage />;
  else if (slug === 'alert') return <AlertPage />;
  else if (slug === 'alert-dialog') return <AlertDialogPage />;
  else if (slug === 'avatar') return <AvatarPage />;
  else if (slug === 'badge') return <BadgePage />;
  else if (slug === 'breadcrumb') return <BreadcrumbPage />;
  else if (slug === 'button') return <ButtonPage />;
  else if (slug === 'calendar') return <CalendarPage />;
  else if (slug === 'card') return <CardPage />;
  else if (slug === 'carousel') return <CarouselPage />;
  else if (slug === 'checkbox') return <CheckboxPage />;
  else if (slug === 'collapse') return <CollapsePage />;
  else if (slug === 'color-picker') return <ColorPickerPage />;
  else if (slug === 'combobox') return <ComboboxPage />;
  else if (slug === 'copy-button') return <CopyButtonPage />;
  else if (slug === 'date-picker') return <DatePickerPage />;
  else if (slug === 'dialog') return <DialogPage />;
  else if (slug === 'drawer') return <DrawerPage />;
  else if (slug === 'dropdown') return <DropdownPage />;
  else if (slug === 'form') return <FormPage />;
  else if (slug === 'highlight') return <HighlightPage />;
  else if (slug === 'hover-card') return <HoverCardPage />;
  else if (slug === 'indicator') return <IndicatorPage />;
  else if (slug === 'input') return <InputPage />;
  else if (slug === 'loader') return <LoaderPage />;
  else if (slug === 'multi-select') return <MultiSelectPage />;
  else if (slug === 'navigation-menu') return <NavigationMenuPage />;
  else if (slug === 'number-input') return <NumberInputPage />;
  else if (slug === 'pagination') return <PaginationPage />;
  else if (slug === 'password-input') return <PasswordInputPage />;
  else if (slug === 'popover') return <PopoverPage />;
  else if (slug === 'progress') return <ProgressPage />;
  else if (slug === 'radio-group') return <RadioGroupPage />;
  else if (slug === 'rating') return <RatingPage />;
  else if (slug === 'resizable') return <ResizablePage />;
  else if (slug === 'scroll-area') return <ScrollAreaPage />;
  else if (slug === 'select') return <SelectPage />;
  else if (slug === 'skeleton') return <SkeletonPage />;
  else if (slug === 'slider') return <SliderPage />;
  else if (slug === 'switch') return <SwitchPage />;
  else if (slug === 'table') return <TablePage />;
  else if (slug === 'tabs') return <TabsPage />;
  else if (slug === 'textarea') return <TextareaPage />;
  else if (slug === 'timeline') return <TimelinePage />;
  else if (slug === 'toast') return <ToastPage />;
  else if (slug === 'tooltip') return <TooltipPage />;
  else if (slug === 'upload') return <UploadPage />;
  else return <div>Component not found</div>;
}
